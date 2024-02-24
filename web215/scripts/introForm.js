
// Function to handle file input change

// Function to handle file input change
// function handleFileInputChange(file) {
//   if (file) {
//     const reader = new FileReader();

//     reader.onload = () => {
//       const imagePreview = document.getElementById('imagePreview');
//       imagePreview.style.display = 'block';
//       imagePreview.querySelector('.image-preview__image').src = reader.result;
//     };

//     reader.readAsDataURL(file);
//   }
// }

// // Function to handle drop event
// function handleDrop(event) {
//   event.preventDefault();
//   const file = event.dataTransfer.files[0];
//   handleFileInputChange(file);
// }

function dropHandler(ev) {
  console.log("File(s) dropped");

  ev.preventDefault();
  const file = ev.dataTransfer.files[0];
  handleFileInputChange(file);
}

function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}

fileInput.onchange = evt => {
  const [file] = fileInput.files
  if (file) {
    imagePreview.src = URL.createObjectURL(file)
  }
  const picPreview = document.getElementById('picPreview');
  picPreview.style.display = 'block';
}

const getElement = id => {
  let input = document.getElementById(id);
  return input.value
}


let submit = document.getElementById('submit')

submit.onclick = function submit() {
  let picInput = document.getElementById('fileInput');
  let pic = picInput.files[0];
  let caption = getElement('picOf'),
    name = getElement('name'),
    aboutMe = getElement('aboutMe'),
    aboutWork = getElement('aboutWork'),
    aboutAcademics = getElement('aboutAcademics'),
    prefPlat = getElement('prefPlat'),
    courses = getElement('courses'),
    interestingBit = getElement('interestingBit');
    pButter = document.querySelector('input[id="pButter"]:checked').value;

  if (pic) {
    let reader = new FileReader();

    reader.onload = function (e) {
      let picChoice = e.target.result;


      document.querySelector('main').innerHTML = `
          <div class="imageBox">
            <img class="image" src="${picChoice}" alt="photo" style="width: 15vh; height:auto; padding-top: 3vh;"><br>
            <div class="caption">
              <i>${caption}</i><br>
            </div><br>
          </div>
  
          <div>
          <span> Hello, ${name}</span>
          <br>
          <br>
          <span><b>Personal background: </b>${aboutMe}</span><br><br>
          <span><b>Professional background: </b> ${aboutWork}</span><br><br>
          <span><b>Academic background: </b> ${aboutAcademics}</span><br><br>
          <span><b>Primary Computer Platform: </b>${prefPlat}</span><br><br>
          <span><b>Courses I'm Taking & Why:</b></span><br><br>
    
            <ul>${(() => {
          let coursesList = courses.split('\n').map(course => course.trim()).filter(Boolean);
          let content = '';
          for (let course of coursesList) {
            let split = course.split(/\s+-\s+/);
            content += `<li><strong>${split[0]}</strong> - ${split[1]}</li>`;
          }
          return content;
        })()}</ul><br>
        <span><b>Funny/Interesting Item about Yourself: </b>${interestingBit}</span><br><br>
    
        
          <span><b>It appears you think peanut butter goes best with:</b> ${pButter}</span>
        </div>
        `;
    };

    reader.readAsDataURL(pic);
  } else {
    alert('You didnt chose a valid picture!');
  }
};