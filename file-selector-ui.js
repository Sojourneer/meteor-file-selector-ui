// Write your package code here!

Template.fileSelectorUI.events({
    'click .fileSelectorUI-dropzone': function(evt) {
        //console.log("clicked", evt);
        evt.stopPropagation();

        if(evt.target.className != "fileSelectorUI-hidden-fileInput")
            $('.fileSelectorUI-hidden-fileInput').trigger('click');

        return true;
    },
    'dropped .fileSelectorUI-dropzone': function(evt, temp) {
        //console.log('files dropped');
        evt.stopPropagation();

        FS.Utility.eachFile(evt, function (browserFile) {
            //console.log('file dropped', browserFile);
            $(".fileSelectorUI-filedrop").trigger("FileSelectorUI:droppedfile", {file:browserFile})
        });
    },

    'change .fileSelectorUI-hidden-fileInput': function(evt) {
        //console.log("change", evt);
        evt.stopPropagation();

        var doc = this;
        FS.Utility.eachFile(evt, function (browserFile) {
            $(".fileSelectorUI-filedrop").trigger("FileSelectorUI:droppedfile", {file:browserFile})
        });

        return true;
    },
    // this is the event that the including template will use to handle the files
    'FileSelectorUI:droppedfile .fileSelectorUI-filedrop': function(evt, template, data) {
        console.log("file-selector-ui","FileSelectorUI:droppedfile", evt, data);
        // not used currently. Parent template is expected to handle
     }
});
