window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitBtn").addEventListener("click", function (event) {
        const form = document.getElementById("myForm");

        if (!form.checkValidity()) {
            alert("Пожалуйста, заполните все обязательные поля.");
            return;
        }

        const formData = new FormData(form);
        const xmlData = document.implementation.createDocument("", "", null);
        const rootElement = xmlData.createElement("formData");

        formData.forEach((value, key) => {
            const element = xmlData.createElement(key);
            element.textContent = value;
            rootElement.appendChild(element);
        });

        xmlData.appendChild(rootElement);
        saveXmlData(xmlData);
    });
});

function saveXmlData(xmlData) {
    const serializedXml = new XMLSerializer().serializeToString(xmlData);
    const blob = new Blob([serializedXml], { type: "application/xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "formData.xml";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
