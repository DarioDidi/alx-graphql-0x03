import React, { ErrorInfo, ReactNode } from "react";
import * as Sentry from '@sentry/react';

interface State {
	hasError: boolean;
}

interface ErrorBoundaryProps {
	children: ReactNode;
}


class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error): State {
		console.log("\nSETTING ERROR\n")
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log("\n\nCAUGH ERRORR!!\n\n");
		Sentry.captureException(error/*, { extra: errorInfo }*/);
	}

	render() {
		console.log("IN RENDER, error:?", this.state.hasError)
		if (this.state.hasError) {
			console.log("FOUNDD ERROR")
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
