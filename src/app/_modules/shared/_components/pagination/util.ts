import { NgZone } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';

export function toInteger(value: any): number {
	return parseInt(`${value}`, 10);
}

export function toString(value: any): string {
	return value !== undefined && value !== null ? `${value}` : '';
}

export function getValueInRange(value: number, max: number, min = 0): number {
	return Math.max(Math.min(value, max), min);
}

export function isString(value: any): value is string {
	return typeof value === 'string';
}

export function isNumber(value: any): value is number {
	return !isNaN(toInteger(value));
}

export function isInteger(value: any): value is number {
	return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

export function isDefined(value: any): boolean {
	return value !== undefined && value !== null;
}

export function isPromise<T>(v: any): v is Promise<T> {
	return v && v.then;
}

export function padNumber(value: number) {
	if (isNumber(value)) {
		return `0${value}`.slice(-2);
	} else {
		return '';
	}
}

export function regExpEscape(text: any) {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export function closest(element: HTMLElement, selector?: string): HTMLElement | null {
	if (!selector) {
		return null;
	}

	if (typeof element.closest === 'undefined') {
		return null;
	}

	return element.closest(selector);
}

export function reflow(element: HTMLElement) {
	return (element || document.body).getBoundingClientRect();
}

export function runInZone<T>(zone: NgZone): OperatorFunction<T, T> {
	return (source) => {
		return new Observable((observer) => {
			const next = (value: T) => zone.run(() => observer.next(value));
			const error = (e: any) => zone.run(() => observer.error(e));
			const complete = () => zone.run(() => observer.complete());
			return source.subscribe({ next, error, complete });
		});
	};
}

export function removeAccents(str: string): string {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function getActiveElement(root: Document | ShadowRoot = document): Element | null {
	const activeEl = root?.activeElement;

	if (!activeEl) {
		return null;
	}

	return activeEl.shadowRoot ? getActiveElement(activeEl.shadowRoot) : activeEl;
}