(function (window) {
    'use strict';

    function View() {
        this.grid = this.getElement('.grid');
        this.shuffle = this.getElement('#shuffle');
        this.sort = this.getElement('#sort');
    }

    View.prototype.render = function (items) {
        if (this.grid.hasChildNodes()) {
            this.grid.removeChild(this.grid.firstChild);
        }

        var ul = this.createElement('ul');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var li = this.createElement('li', item.theme);
            li.textContent = item.cardNo;
            
            ul.append(li);
        }

        this.grid.append(ul);
    };

    View.prototype.bindShuffle = function (handler) {
        this.shuffle.addEventListener('click', handler);
    };

    View.prototype.bindSort = function (handler) {
        this.sort.addEventListener('click', handler);
    };

    View.prototype.createElement = function (tagName, className) {
        const element = document.createElement(tagName);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }

    View.prototype.getElement = function (selector) {
        const element = document.querySelector(selector);

        return element;
    }

    window.app = window.app || {};
    window.app.View = View;
}(window));