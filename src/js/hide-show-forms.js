{
    const initHideShow = function () {
        const checkbox = document.getElementById('hideShowCheckbox');
        const div = document.getElementById('hideShowForms');

        const hide = function () {
            div.classList.add('hide-show');
        }

        const show = function () {
            div.classList.remove('hide-show');
        }
        const updateHideShow = function () {
            if (!checkbox.checked) {
                hide();
            } else {
                show();
            }
        }
        checkbox.addEventListener('change', function (e) {
            updateHideShow();
        });
    }

    document.addEventListener("DOMContentLoaded", initHideShow);
}