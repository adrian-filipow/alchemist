import {render} from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { InspectorContainer } from "./Inspector/InspectorContainer";
import { rootStore } from "../../shared/store";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";

export function renderInspectorUI(): void {
	const el = document.querySelector("[panelid=inspector]");
	if (!el) {
		console.error(el);
	}

	render(
		<Provider store={rootStore}>
			<ErrorBoundary>
				<InspectorContainer  />
			</ErrorBoundary>
		</Provider>, el as HTMLElement
	);
}

