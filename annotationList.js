/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

const annotations = [
    {
        "@context": [
            "https://www.w3.org/ns/anno.jsonld",
            "https://comments.acrobat.com/ns/anno.jsonld"
        ],
        "type": "Annotation",
        "id": "90afbc73-7f4b-8b0a-ddh7-39797ba5a88",
        "type": "Annotation",
        "motivation": "commenting",
        "bodyValue": "ok",
        "target": {
            "source": "6d07d124-ac85-43b3-a867-36930f502ac6",
            "selector": {
                "node": {
                    "index": 0
                },
                "opacity": 0.4,
                "subtype": "shape",
                "boundingBox": [
                    139.34103746936748,
                    667.810745284982,
                    160.0523227861483,
                    680.75529860797
                ],
                "inkList": [
                    [
                        146.46054179701088,
                        676.2247049449242,
                        147.7549971293097,
                        674.9302496126253,
                        148.4022247954591,
                        674.9302496126253,
                        150.34390779390728,
                        674.9302496126253,
                        150.99113546005668,
                        674.9302496126253,
                        151.6383631262061,
                        674.9302496126253,
                        152.9328184585049,
                        674.9302496126253,
                        153.58004612465427,
                        674.9302496126253,
                        154.22727379080368,
                        674.9302496126253,
                        154.87450145695308,
                        674.9302496126253,
                        156.1689567892519,
                        674.9302496126253,
                        156.1689567892519,
                        674.2830219464759,
                        156.1689567892519,
                        673.6357942803265,
                        156.1689567892519,
                        671.6941112818783,
                        154.87450145695308,
                        671.6941112818783,
                        154.22727379080368,
                        671.6941112818783,
                        153.58004612465427,
                        671.6941112818783,
                        152.9328184585049,
                        671.6941112818783,
                        151.6383631262061,
                        671.6941112818783,
                        150.99113546005668,
                        671.6941112818783,
                        150.34390779390728,
                        671.6941112818783,
                        149.69668012775787,
                        671.6941112818783,
                        148.4022247954591,
                        671.6941112818783,
                        147.7549971293097,
                        671.6941112818783,
                        147.10776946316028,
                        672.9885666141771,
                        146.46054179701088,
                        672.9885666141771,
                        145.16608646471207,
                        672.9885666141771,
                        144.5188587985627,
                        673.6357942803265,
                        143.87163113241328,
                        673.6357942803265,
                        143.87163113241328,
                        674.2830219464759,
                        143.87163113241328,
                        674.9302496126253,
                        143.22440346626388,
                        674.9302496126253,
                        143.22440346626388,
                        676.2247049449242,
                        143.22440346626388,
                        676.8719326110736,
                        144.5188587985627,
                        676.8719326110736,
                        145.16608646471207,
                        676.8719326110736,
                        147.10776946316028,
                        676.8719326110736,
                        147.7549971293097,
                        676.8719326110736,
                        148.4022247954591,
                        676.8719326110736,
                        150.34390779390728,
                        676.2247049449242,
                        150.99113546005668,
                        676.2247049449242,
                        151.6383631262061,
                        676.2247049449242,
                        152.9328184585049,
                        676.2247049449242
                    ]
                ],
                "strokeColor": "#b80000",
                "strokeWidth": 3,
                "type": "AdobeAnnoSelector"
            }
        },
        "creator": {
            "id": "barylakweb@gmail.com",
            "name": "Sebastian",
            "type": "Person"
        },
        "created": "2021-12-28T11:52:25Z",
        "modified": "2021-12-28T11:52:25Z"
}
    ];

var viewerConfig = {
    /* Enable commenting APIs */
    enableAnnotationAPIs: true,  /* Default value is false */
   includePDFAnnotations: true
};

/* Variable for holding reference of Annotation Manager */
var annotationManager;

/* Variable for holding annotation tool selected from custom comments pane */
var selectedAnnotationTool;

/* Initializing with the default annotation options */
var annotationOptions = {
    freetext: { defaultColor: "#000000", fontSize: "12px"},
    note: { defaultColor: "#fccb00"},
    highlight: { defaultColor: "#fccb00"}, 
    strikeout: { defaultColor: "#b80000"}, 
    underline: { defaultColor: "#008b02"},
    shape: { defaultColor: "#b80000", strokeWidth: 3}, 
    eraser: {} 
};

/* Wait for Adobe Document Services PDF Embed API to be ready */
document.addEventListener("adobe_dc_view_sdk.ready", function () {
    /* Initialize the AdobeDC View object */
    var adobeDCView = new AdobeDC.View({
        /* Pass your registered client id */
        clientId: "b768944bf23c4fac960345d574cd7ac9",
        /* Pass the div id in which PDF should be rendered */
        divId: "adobe-dc-view",
      locale: "pl-PL",
    });
    
    /* Invoke the file preview API on Adobe DC View object and return the Promise object */
    var previewFilePromise = adobeDCView.previewFile({
        /* Pass information on how to access the file */
        content: {
            /* Location of file where it is hosted */
            location: {
                url: "https://uploads-ssl.webflow.com/618d0b1fa430c955b7f768ae/61c31867462131742c8ad94a_MKD%2C%20MKKD%2C%2030MKDZ.pdf",
                /*
                If the file URL requires some additional headers, then it can be passed as follows:-
                header: [
                    {
                        key: "<HEADER_KEY>",
                        value: "<HEADER_VALUE>",
                    }
                ]
                */
            },
        },
        /* Pass meta data of file */
        metaData: {
            /* file name */
            fileName: "Bodea Brochure.pdf",
            /* file ID */
            id: "6d07d124-ac85-43b3-a867-36930f502ac6"
        }
    }, viewerConfig);

  
  
  
  const profile = {
  userProfile: {
      name: "Sebastian",
      firstName: "Baryl",
      lastName: "seboi",
      email: "barylakweb@gmail.com"
  }
};

adobeDCView.registerCallback(
   AdobeDC.View.Enum.CallbackType.GET_USER_PROFILE_API,
   function() {
      return new Promise((resolve, reject) => {
         resolve({
            code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
            data: profile
         });
      });
   },
{});
  
  
  
  
  
    /* Use the annotation manager interface to invoke the commenting APIs*/
    previewFilePromise.then(function (adobeViewer) {
        
        /* Enable the annotation tools in the comments pane after PDF is rendered */
        Object.keys(annotationOptions).forEach(function(annotType) {
            document.getElementById(annotType).disabled = false;
        });
        
        adobeViewer.getAnnotationManager().then(function (annotManager) {
            annotationManager = annotManager;
            /* API to set UI configurations */
          
          /*dodane */
          
            annotationManager.addAnnotationsInPDF(annotManager)
                .then(function (result) {
                    console.log("Annotations added to PDF successfully and updated PDF buffer returned.", result)
                })
                .catch(function (error) {
                    console.log(error)
                });

            /* API to remove annotations from PDF and return the updated PDF buffer along with the list of annotations */
            setTimeout(function() {
                annotationManager.removeAnnotationsFromPDF()
                .then(function (result) {
                    console.log("Annotations removed from PDF successfully and updated PDF buffer and annotation list returned.", result)
                })
                .catch(function (error) {
                    console.log(error)
                });
            }, 3000);
          /* koniec dodania */
          
          
          
            const customFlags = {
                showToolbar: false,   /* Default value is true */
                showCommentsPanel: true,  /* Default value is true */
                downloadWithAnnotations: true,  /* Default value is false */
                printWithAnnotations: true,  /* Default value is false */
            };

            function addCommentText(annotation) {
                var type = annotation.target.selector.subtype;
                var comment = prompt("Enter the text associated with " + type, "Added a " + type) || "Added a " + type;
                annotation.bodyValue = comment;
                annotationManager.updateAnnotation(annotation)
                    .then(function () {
                        console.log("Annotation updated successfully.");
                        addAnnotation(annotation);
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            }

            annotationManager.setConfig(customFlags)
                .then(function () {
                    console.log("Custom flags applied successfully.")
                })
                .catch(function (error) {
                    console.log(error)
                });

            /* API to register events listener */
            annotationManager.registerEventListener(
                function (event) {
                    if (event.type === "ANNOTATION_ADDED") {
                        if (event.data.bodyValue) {
                            addAnnotation(event.data);
                        } else {
                            addCommentText(event.data);
                        }
                    }
                    if (event.type === "ANNOTATION_DELETED" && document.getElementById(event.data.id)) {
                        document.getElementById("annots").removeChild(document.getElementById(event.data.id));
                    }
                    if (event.type === "ANNOTATION_SELECTED" && document.getElementById(event.data.id)) {
                        document.getElementById(event.data.id).style.border = "2px solid #3D85B0";
                    }
                    if (event.type === "ANNOTATION_UNSELECTED" && document.getElementById(event.data.id)) {
                        document.getElementById(event.data.id).style.border = "2px solid #eee";
                    }
                    if (event.type === "ANNOTATION_UPDATED" && document.getElementById(event.data.id)) {
                        document.getElementById(event.data.id).getElementsByTagName("label")[0].innerText = event.data.bodyValue;
                    }
                    if (event.type === "ANNOTATION_MODE_STARTED" && document.getElementById(event.data)) {
                        document.getElementById(event.data).style.opacity = "1.0";
                    }
                    if (event.type === "ANNOTATION_MODE_ENDED" && document.getElementById(event.data)) {
                        document.getElementById(event.data).style.opacity = "0.5";
                    }
                    console.log(event);
                }
            );
        });
    });
});


/* Variable for holding dom reference of Annotation collection */
var annotsHolder;

document.addEventListener("DOMContentLoaded", function () {
    annotsHolder = document.getElementById("annots");
});

/* This will create and return a new Annotation list item */
var createAnnotationItem = function (annotation) {

    var listItem = document.createElement("li");
    listItem.id = annotation.id;

    var label = document.createElement("label");//label
    var editInput = document.createElement("input");//text
    var editButton = document.createElement("button");//edit button
    var deleteButton = document.createElement("button");//delete button

    label.innerText = annotation.bodyValue;

    /* Each elements, needs appending */
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    /* and appending. */
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
};

/* This will add a new Annotation list item to List and attach action of Edit and Delete Buttons */
var addAnnotation = function (annotation) {
    /* Create a new list item with the text from new annotation: */
    var listItem = createAnnotationItem(annotation);
    /* Append listItem to incompleteTaskHolder */
    annotsHolder.appendChild(listItem);
    var editButton = listItem.querySelector("button.edit");
    var deleteButton = listItem.querySelector("button.delete");


    /* Bind editAnnotation to edit button. */
    editButton.onclick = function (e) {
        e.stopImmediatePropagation();
        editAnnotation(annotation, this.parentNode);
    };
    /* Bind deleteAnnotation to delete button. */
    deleteButton.onclick = function (e) {
        e.stopImmediatePropagation();
        deleteAnnotation(annotation, this.parentNode);
    };

    listItem.onclick = function () {
        annotationManager.selectAnnotation(annotation.id).then(function () {}).catch(function () {});
    }
};

/* Edit an existing annotation using Annotation API and update the list item as well. */
var editAnnotation = function (annotation, parentNode) {
    var listItem = parentNode;

    var editInput = listItem.querySelector("input[type=text]");
    var editButton = listItem.querySelector("button");
    var label = listItem.querySelector("label");
    var containsClass = listItem.classList.contains("editMode");
    /* If class of the parent is .editmode */
    if (containsClass) {
        /* switch to .editmode */
        /* label becomes the inputs value. */
        label.innerText = editInput.value;
        editButton.textContent = "Edit";
        annotation.bodyValue = editInput.value;
        annotationManager.updateAnnotation(annotation)
            .then(function () {
                console.log("Annotation updated successfully.")
            })
            .catch(function (error) {
                console.log(error)
            });
    } else {
        editInput.value = label.innerText;
        editButton.textContent = "Save";
    }

    /* toggle .editmode on the parent. */
    listItem.classList.toggle("editMode");
};

/* Delete an existing annotation from Annotation API and remove the same from list */
var deleteAnnotation = function (annotation, parentNode) {
    var listItem = parentNode;
    var ul = listItem.parentNode;
    /* Remove the parent list item from the ul. */
    ul.removeChild(listItem);
    var filter = {
        annotationIds: [annotation.id]
    };
    annotationManager.deleteAnnotations(filter)
        .then(function () {
            console.log("Annotation deleted successfully.")
        })
        .catch(function (error) {
            console.log(error)
        });
};

/* Select any annotation tool from the right-hand comments pane and start the annotation mode */
var selectAnnotationTool = function(annotTool) {
    document.getElementById("annot-color").value = annotationOptions[annotTool].defaultColor;
    document.getElementById("font-size").value = annotationOptions[annotTool].fontSize;
    document.getElementById("stroke-width").value = annotationOptions[annotTool].strokeWidth;
    
    document.getElementById("annot-color").style.display = "none";
    document.getElementById("font-size").style.display = "none";
    document.getElementById("stroke-width").style.display = "none";
    
    if (annotTool !== "eraser") {
        document.getElementById("annot-color").style.display = "inline-block";
    }
    if (annotTool === "freetext") {
        document.getElementById("font-size").style.display = "inline-block";
    }
    if (annotTool === "shape") {
        document.getElementById("stroke-width").style.display = "inline-block";
    }

    if (selectedAnnotationTool !== annotTool) {
        selectedAnnotationTool = annotTool;
        startAnnotationMode(annotTool, {});
    } else {
        endAnnotationMode();
        selectedAnnotationTool = "";
        document.getElementById("annot-color").style.display = "none";
        document.getElementById("font-size").style.display = "none";
        document.getElementById("stroke-width").style.display = "none";
    }
}

/* Set annotation options (such as, color and font size) and start annotation mode */
var setAnnotationOptions = function() {
    annotationOptions[selectedAnnotationTool].defaultColor = document.getElementById("annot-color").value;

    if (document.getElementById("font-size").value) {
        annotationOptions[selectedAnnotationTool].fontSize = document.getElementById("font-size").value;
    }

    if (document.getElementById("stroke-width").value) {
        annotationOptions[selectedAnnotationTool].strokeWidth = parseInt(document.getElementById("stroke-width").value);
    }

    startAnnotationMode(selectedAnnotationTool, annotationOptions[selectedAnnotationTool]);
}

/* Start the annotation mode */
var startAnnotationMode = function(mode, options) {
    annotationManager.startAnnotationMode(mode, options)
        .then(function () {})
        .catch(function(error) { console.log(error)});
}

/* End the annotation mode */
var endAnnotationMode = function(mode, options) {
    annotationManager.endAnnotationMode()
        .then(function () {})
        .catch(function(error) { console.log(error)});
}

