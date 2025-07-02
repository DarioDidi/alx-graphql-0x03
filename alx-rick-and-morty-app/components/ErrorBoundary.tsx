import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import React, { ErrorInfo, ReactNode } from "react";

interface State {
	hasError: boolean
}

interface ErrorBoundaryProps {
	children: ReactNode;
}

class ErroBoundary extends React.Component<ErrorBoundaryProps, State> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): state {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.log({ error, errorInfo })
	}

	render() {
		if (this.state.hasError) {
			return (
				<div>
					<h2>Oops, there is an error!</h2>
					<button onClick={() => this.setState({ hasError: false })}>
						Try again?
					</button>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
