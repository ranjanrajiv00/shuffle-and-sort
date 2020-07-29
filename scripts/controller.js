(function (window) {
    'use strict';

    function Controller(modal, view) {
        this.modal = modal;
        this.view = view;

        this.modal.bindItemsChanged(this.render.bind(this));
        this.view.bindShuffle(this.handleShuffle.bind(this));
        this.view.bindSort(this.handleSort.bind(this));

        this.render(this.modal.items);
    }

    Controller.prototype.handleShuffle = function(){
        this.modal.shuffle();
    }

    Controller.prototype.handleSort = function(){
        this.modal.sort();
    }

    Controller.prototype.render = function(items){
        this.view.render(items);
    }

    window.app = window.app || {};
    window.app.Controller = Controller;
}(window));