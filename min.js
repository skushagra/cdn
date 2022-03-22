function directLog(log){
    console.log(log);
}

function DjangoAjaxViewCall(view, method, dataset){
    console.log(view);
    console.log(method);
    return "success";
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
