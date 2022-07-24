function propsToJson(){
    content = document.getElementById("input-props").value
    let input_array = content.split("\n")
    var output_object = {}
    input_array.forEach(element => {
        const prop_name = element.split("=")[0]
        const prop_value = element.split("=")[1]
        output_object[prop_name] = prop_value
        console.log(prop_name, prop_value)
    });
    document.getElementById("output-json").value = JSON.stringify(
        output_object
    ).replace(",", ",\n")
}