import {
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	Directive,
	EventEmitter,
	inject,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
	TemplateRef,
} from '@angular/core';
import { getValueInRange, isNumber } from './util';
import { NgbPaginationConfig } from './pagination-config';

export interface NgbPaginationLinkContext {
	currentPage: number;
	disabled: boolean;
}

export interface NgbPaginationNumberContext extends NgbPaginationLinkContext {
	$implicit: number;
}

export interface NgbPaginationPagesContext {
	$implicit: number;
	disabled: boolean;
	pages: number[];
}

@Directive({ selector: 'ng-template[ngbPaginationEllipsis]', standalone: false })
export class NgbPaginationEllipsis {
	templateRef = inject(TemplateRef<NgbPaginationLinkContext>);
}

@Directive({ selector: 'ng-template[ngbPaginationFirst]', standalone: false })
export class NgbPaginationFirst {
	templateRef = inject(TemplateRef<NgbPaginationLinkContext>);
}

@Directive({ selector: 'ng-template[ngbPaginationLast]', standalone: false })
export class NgbPaginationLast {
	templateRef = inject(TemplateRef<NgbPaginationLinkContext>);
}

@Directive({ selector: 'ng-template[ngbPaginationNext]', standalone: false })
export class NgbPaginationNext {
	templateRef = inject(TemplateRef<NgbPaginationLinkContext>);
}

@Directive({ selector: 'ng-template[ngbPaginationNumber]', standalone: false })
export class NgbPaginationNumber {
	templateRef = inject(TemplateRef<NgbPaginationNumberContext>);
}

@Directive({ selector: 'ng-template[ngbPaginationPrevious]', standalone: false })
export class NgbPaginationPrevious {
	templateRef = inject(TemplateRef<NgbPaginationLinkContext>);
}

@Directive({ selector: 'ng-template[ngbPaginationPages]', standalone: false })
export class NgbPaginationPages {
	templateRef = inject(TemplateRef<NgbPaginationPagesContext>);
}

@Component({
	selector: 'fin-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss'],
	host: {
		role: 'navigation',
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnChanges {
	private _config = inject(NgbPaginationConfig);

	pageCount = 0;
	pages: number[] = [];

	@ContentChild(NgbPaginationEllipsis, { static: false }) tplEllipsis?: NgbPaginationEllipsis;
	@ContentChild(NgbPaginationFirst, { static: false }) tplFirst?: NgbPaginationFirst;
	@ContentChild(NgbPaginationLast, { static: false }) tplLast?: NgbPaginationLast;
	@ContentChild(NgbPaginationNext, { static: false }) tplNext?: NgbPaginationNext;
	@ContentChild(NgbPaginationNumber, { static: false }) tplNumber?: NgbPaginationNumber;
	@ContentChild(NgbPaginationPrevious, { static: false }) tplPrevious?: NgbPaginationPrevious;
	@ContentChild(NgbPaginationPages, { static: false }) tplPages?: NgbPaginationPages;

	@Input() disabled = this._config.disabled;

	@Input() boundaryLinks = this._config.boundaryLinks;

	@Input() directionLinks = this._config.directionLinks;

	@Input() ellipses = this._config.ellipses;

	@Input() rotate = this._config.rotate;

	@Input({ required: true }) collectionSize!: number;

	@Input() maxSize = this._config.maxSize;

	@Input() page = 1;

	@Input() pageSize = this._config.pageSize;

	@Output() pageChange = new EventEmitter<number>(true);

	@Input() size = this._config.size;

	@Output() pageSizeChange = new EventEmitter<any>(true);

	hasPrevious(): boolean {
		return this.page > 1;
	}

	hasNext(): boolean {
		return this.page < this.pageCount;
	}

	nextDisabled(): boolean {
		return !this.hasNext() || this.disabled;
	}

	previousDisabled(): boolean {
		return !this.hasPrevious() || this.disabled;
	}

	selectPage(pageNumber: number): void {
		this._updatePages(pageNumber);
	}

	ngOnChanges(changes: SimpleChanges): void {
		this._updatePages(this.page);
	}

	isEllipsis(pageNumber: any): boolean {
		return pageNumber === -1;
	}

	private _applyEllipses(start: number, end: number) {
		if (this.ellipses) {
			if (start > 0) {
				if (start > 2) {
					this.pages.unshift(-1);
				} else if (start === 2) {
					this.pages.unshift(2);
				}
				this.pages.unshift(1);
			}
			if (end < this.pageCount) {
				if (end < this.pageCount - 2) {
					this.pages.push(-1);
				} else if (end === this.pageCount - 2) {
					this.pages.push(this.pageCount - 1);
				}
				this.pages.push(this.pageCount);
			}
		}
	}

	private _applyRotation(): [number, number] {
		let start = 0;
		let end = this.pageCount;
		let leftOffset = Math.floor(this.maxSize / 2);
		let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;

		if (this.page <= leftOffset) {
			end = this.maxSize;
		} else if (this.pageCount - this.page < leftOffset) {
			start = this.pageCount - this.maxSize;
		} else {
			start = this.page - leftOffset - 1;
			end = this.page + rightOffset;
		}

		return [start, end];
	}

	private _applyPagination(): [number, number] {
		let page = Math.ceil(this.page / this.maxSize) - 1;
		let start = page * this.maxSize;
		let end = start + this.maxSize;

		return [start, end];
	}

	private _setPageInRange(newPageNo: any) {
		const prevPageNo = this.page;
		this.page = getValueInRange(newPageNo, this.pageCount, 1);

		if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
			this.pageChange.emit(this.page);
		}
	}

	private _updatePages(newPage: number) {
		this.pageCount = Math.ceil(this.collectionSize / this.pageSize);

		if (!isNumber(this.pageCount)) {
			this.pageCount = 0;
		}

		this.pages.length = 0;
		for (let i = 1; i <= this.pageCount; i++) {
			this.pages.push(i);
		}

		this._setPageInRange(newPage);

		if (this.maxSize > 0 && this.pageCount > this.maxSize) {
			let start = 0;
			let end = this.pageCount;

			if (this.rotate) {
				[start, end] = this._applyRotation();
			} else {
				[start, end] = this._applyPagination();
			}

			this.pages = this.pages.slice(start, end);

			this._applyEllipses(start, end);
		}
	}
}