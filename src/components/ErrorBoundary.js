import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Generate unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    this.setState({
      error,
      errorInfo,
      errorId
    });

    // Log error details
    console.error('Error Boundary caught an error:', {
      error,
      errorInfo,
      errorId,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });

    // Send to error tracking service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo, errorId);
    }
  }

  reportError = async (error, errorInfo, errorId) => {
    try {
      // You can send to services like Sentry, LogRocket, etc.
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: true,
          custom_map: {
            error_id: errorId,
            component_stack: errorInfo.componentStack,
            error_name: error.name
          }
        });
      }

      // Example: Send to custom error tracking endpoint
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     errorId,
      //     message: error.message,
      //     stack: error.stack,
      //     componentStack: errorInfo.componentStack,
      //     url: window.location.href,
      //     userAgent: navigator.userAgent,
      //     timestamp: new Date().toISOString()
      //   })
      // });
    } catch (reportingError) {
      console.error('Error reporting failed:', reportingError);
    }
  };

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null 
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Algo salió mal
              </h2>
              <p className="text-gray-600 mb-6">
                Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado.
              </p>
              
              {this.state.errorId && (
                <div className="bg-gray-100 rounded-lg p-3 mb-6">
                  <p className="text-sm text-gray-500 mb-1">ID del Error:</p>
                  <p className="text-xs font-mono text-gray-700 break-all">
                    {this.state.errorId}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-[#03346E] text-white px-6 py-3 rounded-md hover:bg-[#03346E]/80 transition duration-300 font-medium"
              >
                Intentar de nuevo
              </button>
              
              <button
                onClick={this.handleReload}
                className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition duration-300 font-medium"
              >
                Recargar página
              </button>
              
              <button
                onClick={() => window.history.back()}
                className="w-full bg-transparent border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition duration-300 font-medium"
              >
                Volver atrás
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Ver detalles del error (solo desarrollo)
                </summary>
                <div className="mt-2 p-3 bg-red-50 rounded-lg">
                  <pre className="text-xs text-red-800 overflow-auto">
                    {this.state.error.toString()}
                    {'\n\n'}
                    {this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for wrapping components with error boundary
export const withErrorBoundary = (Component, fallback = null) => {
  return class extends React.Component {
    render() {
      return (
        <ErrorBoundary fallback={fallback}>
          <Component {...this.props} />
        </ErrorBoundary>
      );
    }
  };
};

export default ErrorBoundary; 