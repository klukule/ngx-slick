import { Component, Directive, ElementRef, EventEmitter, Host, Input, NgModule, NgZone, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Slick component
 */
var SlickComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function SlickComponent(el, zone) {
        this.el = el;
        this.zone = zone;
        this.afterChange = new EventEmitter();
        this.beforeChange = new EventEmitter();
        this.breakpoint = new EventEmitter();
        this.destroy = new EventEmitter();
        this.init = new EventEmitter();
        this.slides = [];
        this.initialized = false;
    }
    /**
     * On component destroy
     */
    /**
     * On component destroy
     * @return {?}
     */
    SlickComponent.prototype.ngOnDestroy = /**
     * On component destroy
     * @return {?}
     */
    function () {
        this.unslick();
    };
    /**
     * On component view init
     */
    /**
     * On component view init
     * @return {?}
     */
    SlickComponent.prototype.ngAfterViewInit = /**
     * On component view init
     * @return {?}
     */
    function () {
    };
    /**
     * init slick
     */
    /**
     * init slick
     * @return {?}
     */
    SlickComponent.prototype.initSlick = /**
     * init slick
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var self = this;
        this.zone.runOutsideAngular(function () {
            jQuery(_this.el.nativeElement)[0].textContent = '';
            _this.$instance = jQuery(_this.el.nativeElement);
            _this.$instance.on('init', function (event, slick) {
                _this.zone.run(function () {
                    _this.init.emit({ event: event, slick: slick });
                });
            });
            _this.$instance.slick(_this.config);
            _this.initialized = true;
            _this.$instance.on('afterChange', function (event, slick, currentSlide) {
                self.zone.run(function () {
                    self.afterChange.emit({ event: event, slick: slick, currentSlide: currentSlide });
                });
            });
            _this.$instance.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                self.zone.run(function () {
                    self.beforeChange.emit({ event: event, slick: slick, currentSlide: currentSlide, nextSlide: nextSlide });
                });
            });
            _this.$instance.on('breakpoint', function (event, slick, breakpoint) {
                self.zone.run(function () {
                    self.breakpoint.emit({ event: event, slick: slick, breakpoint: breakpoint });
                });
            });
            _this.$instance.on('destroy', function (event, slick) {
                self.zone.run(function () {
                    self.destroy.emit({ event: event, slick: slick });
                });
            });
        });
    };
    /**
     * @param {?} slickItem
     * @return {?}
     */
    SlickComponent.prototype.addSlide = /**
     * @param {?} slickItem
     * @return {?}
     */
    function (slickItem) {
        var _this = this;
        if (!this.initialized) {
            this.initSlick();
        }
        this.slides.push(slickItem);
        this.zone.run(function () {
            _this.$instance.slick('slickAdd', slickItem.el.nativeElement);
        });
    };
    /**
     * @param {?} slickItem
     * @return {?}
     */
    SlickComponent.prototype.removeSlide = /**
     * @param {?} slickItem
     * @return {?}
     */
    function (slickItem) {
        var _this = this;
        /** @type {?} */
        var idx = this.slides.indexOf(slickItem);
        this.zone.run(function () {
            _this.$instance.slick('slickRemove', idx);
        });
        this.slides = this.slides.filter(function (s) { return s !== slickItem; });
    };
    /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    SlickComponent.prototype.slickGoTo = /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickGoTo', index);
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.slickNext = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickNext');
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.slickPrev = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickPrev');
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.slickPause = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickPause');
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.slickPlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickPlay');
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.unslick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.$instance) {
            this.zone.run(function () {
                _this.$instance.slick('unslick');
            });
        }
        this.initialized = false;
    };
    SlickComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-slick',
                    exportAs: 'slick-modal',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return SlickComponent; }),
                            multi: true
                        }
                    ],
                    template: '<ng-content></ng-content>',
                },] },
    ];
    /** @nocollapse */
    SlickComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    SlickComponent.propDecorators = {
        config: [{ type: Input }],
        afterChange: [{ type: Output }],
        beforeChange: [{ type: Output }],
        breakpoint: [{ type: Output }],
        destroy: [{ type: Output }],
        init: [{ type: Output }]
    };
    return SlickComponent;
}());
var SlickItemDirective = /** @class */ (function () {
    function SlickItemDirective(el, carousel) {
        this.el = el;
        this.carousel = carousel;
    }
    /**
     * @return {?}
     */
    SlickItemDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.carousel.addSlide(this);
    };
    /**
     * @return {?}
     */
    SlickItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.carousel.removeSlide(this);
    };
    SlickItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxSlickItem]',
                },] },
    ];
    /** @nocollapse */
    SlickItemDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SlickComponent, decorators: [{ type: Host }] }
    ]; };
    return SlickItemDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SlickModule = /** @class */ (function () {
    function SlickModule() {
    }
    /**
     * @return {?}
     */
    SlickModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SlickModule,
        };
    };
    SlickModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SlickComponent,
                        SlickItemDirective,
                    ],
                    exports: [
                        SlickComponent,
                        SlickItemDirective,
                    ]
                },] },
    ];
    return SlickModule;
}());

export { SlickModule, SlickComponent, SlickItemDirective };
