// Here is how a regular module would look like
// Name of the file = module name
var glossary = {
    terms: {
        "=": "",
        ">": "",
        "<": "",
        ">=": "",
        "<=": "",
        "acuteAngles": "Explanation of the term 'acute'",
        "obtuseAngles": "Explanation of the term obtuse",
        "straightSides": "A straight side is a side that is straight"
    },
    showPopup: function (keyword, text) {
        //alert(this.terms[target]);
        $("#glossary .modal-title").html(text);
        $("#glossary .modal-body").html(this.terms[keyword]);
        $("#glossary").toggle(true);
    },
    hidePopup: function () {
        $("#glossary").toggle(false);
    },
    init: function () {
        var self = this;
        $(document).on("click", ".keyWord", function () {
            self.showPopup($(this).attr("data-property"), this.innerHTML);
        });
        $(document).ready(function () {
            var markup = '<div id="glossary" class="modal" role="dialog">'
                    + '<div class="modal-dialog">'
                    + '<div class="modal-content">'
                    + '<div class="modal-header">'
                    + '<button type="button" class="close" data-dismiss="modal">&times;</button>'
                    + '<h4 class="modal-title">Glossary term</h4>'
                    + '</div>'
                    + '<div class="modal-body">'
                    + 'Description'
                    + '</div>'
                    + '<div class="modal-footer">'
                    + '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            $("body").append(markup);
            $("#glossary [data-dismiss]").click(function () {
                self.hidePopup();
            });
        });
        return this;
    }
}.init();