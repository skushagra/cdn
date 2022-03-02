function DjangoAjaxViewCall(view, method, dataset){
    called_url = `{% url '${view}' %}`
    $.ajax({
        url: called_url,
        type: method,
        data: dataset,
        success: (data) => {
            return data;
        },
        failure: (error) => {
            return error;
        }
    });
}
