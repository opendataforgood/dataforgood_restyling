/**
 * Created by vicens on 9/7/14.
 */
Template[getTemplate('postDiscuss')].helpers({

    postRightCategories: function () {
        return postRightCategories;
    },
    getTemplate: function () {
        return getTemplate(this.template);
    }

});