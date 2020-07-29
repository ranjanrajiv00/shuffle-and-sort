(function (window) {
    'use strict';

    function Modal() {
        this.items = [{
            cardNo: 1,
            theme: 'light'
        },
        {
            cardNo: 2,
            theme: 'blue'
        },
        {
            cardNo: 3,
            theme: 'dark'
        },
        {
            cardNo: 4,
            theme: 'blue'
        },
        {
            cardNo: 5,
            theme: 'dark'
        },
        {
            cardNo: 6,
            theme: 'gray'
        },
        {
            cardNo: 7,
            theme: 'gray'
        },
        {
            cardNo: 8,
            theme: 'light'
        },
        {
            cardNo: 9,
            theme: 'dark'
        }];
    }

    Modal.prototype.bindItemsChanged = function (callback) {
        this.onItemChanged = callback;
    }

    Modal.prototype.shuffle = function () {
        var left = 0, right = this.items.length - 1;

        while (left < right) {
            var suffleFromLeft = Math.floor(Math.random() * left);
            var suffleFromRight = Math.floor(Math.random() * right);

            this.swap(this.items, suffleFromLeft, left);
            this.swap(this.items, suffleFromRight, right);

            left++;
            right--;
        }

        this.onItemChanged(this.items);
    }

    Modal.prototype.sort = function () {
        this.items.sort(function (a, b) {
            return a.cardNo - b.cardNo;
        });
        this.onItemChanged(this.items);
    }

    Modal.prototype.swap = function (items, from, to) {
        var temp = items[from];
        items[from] = items[to];
        items[to] = temp;
    }

    window.app = window.app || {};
    window.app.Modal = Modal;
}(window));