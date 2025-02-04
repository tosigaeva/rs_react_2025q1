import React, { ReactNode } from 'react';
import './ErrorBoundary.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by Error Boundary:', error);
    console.error('Error info:', errorInfo);
  }

  handleClick = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <h1 className="error-title">Something went wrong.</h1>
          <p className="error-subtitle">Please try again later.</p>
          <button className="refresh-button" onClick={this.handleClick}>
            Back
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
