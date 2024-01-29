var localRecords = "localStorage";
var enrollmentForm = document.getElementById("enrollment-form");
var enrollmentRecords = document.getElementById("enrollment-records");

var getStoredRecords = () => {
    return localStorage.getItem(localRecords);
}

var storeRecords = (data) => {
    var prevRecords = getStoredRecords();
    arr = prevRecords ? JSON.parse(prevRecords) : []
    arr.push(data);
    localStorage.setItem(localRecords, JSON.stringify(arr));
}

var showRecords = (data) => {
    var td1 = enrollmentRecords;
    td1.innerHTML += data;
}

var submitEvent = (e) => {
    e.preventDefault();

    var formInput = enrollmentForm;
    var name = formInput.name.value;
    var email = formInput.email.value;
    var gender = formInput.gender.value;
    var website = formInput.website.value;
    var imageLink = formInput.imageLink.value;
    var skills = [];

    if (document.getElementById("java").checked) {
        skills.push("Java")
    }
    if (document.getElementById("html").checked) {
        skills.push("HTML")
    }
    if (document.getElementById("css").checked) {
        skills.push("CSS")
    }

    const rec = { name, email, gender, website, imageLink, skills }
    addNewEnrollment(rec);

    e.target.reset();
}

const addNewEnrollment = (rec) => {
    const { name, email, gender, website, imageLink, skills } = rec;
    newData =
        `
        <tr class="record ">
          <td class="border-end">
                <div>
                    <p class="m-0"><b>${name}</b></p>
                    <p class="m-0">${email}</p>
                    <a class="m-0" target="_blank" href=${website}>
                        Website
                    </a>
                    <p class="m-0">${gender}</p>
                    <p>${skills.join(", ")}</p>
                </div>
          </td>
          <td>
                <div class="h-100 w-100">
                    <img
                        src=${imageLink}
                        class="img-fluid w-100 h-100"
                        alt="image"
                    />
                </div>
            </td>
        </tr>
        `;

    storeRecords(newData);
    showRecords(newData);
}

var displayStored = () => {
    var prevRecords = getStoredRecords();
    arr = prevRecords ? JSON.parse(prevRecords) : []
    arr.forEach((rec) => showRecords(rec));
}

displayStored();