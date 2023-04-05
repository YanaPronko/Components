import { Component, ErrorInfo, ReactNode } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';

type ErrorProps = {
  children: ReactNode;
};
class ErrorBoundary extends Component<ErrorProps> {
  state = {
    error: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);

    this.setState({
      error: true,
    });
  }
  render(): ReactNode {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
