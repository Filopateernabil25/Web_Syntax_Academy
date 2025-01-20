let btn = document.getElementById("button2");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
  btn.addEventListener("click", function () {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
};

const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // تحقق إذا تم تجاوز 200 بكسل
  if (scrollTop > 100) {
    navbar.style.top = "0"; // أظهر شريط التنقل
    navbar.classList.add("scrolled"); // أضف تأثير الظل
  } else {
    navbar.style.top = "-5px"; // أخفِ شريط التنقل
    navbar.classList.remove("scrolled"); // أزل تأثير الظل
  }

  lastScrollTop = scrollTop;
});
let subscribebtn = document.getElementById("subscribebtn");
let subscribebtn2 = document.getElementsByClassName("subscribebtn")[1];
let subscribebtn3 = document.getElementsByClassName("subscribebtn")[2];
let subscribebtn4 = document.getElementsByClassName("subscribebtn")[3];
let subscribebtn5 = document.getElementsByClassName("subscribebtn")[4];
let subscribebtn6 = document.getElementsByClassName("subscribebtn")[5];
subscribebtn.addEventListener("click", function () {
  alert("Please Enter The information For You in Page (Contact Us)");
});
subscribebtn2.addEventListener("click", function () {
  alert("Please Enter The information For You in Page (Contact Us)");
});
subscribebtn3.addEventListener("click", function () {
  alert("Please Enter The information For You in Page (Contact Us)");
});
subscribebtn4.addEventListener("click", function () {
  alert("Please Enter The information For You in Page (Contact Us)");
});
subscribebtn5.addEventListener("click", function () {
  alert("Please Enter The information For You in Page (Contact Us)");
});
subscribebtn6.addEventListener("click", function () {
  alert("Please Enter The information For You in Page (Contact Us)");
});
function generatePDF() {
  // Get user input values
  const studentName = document.getElementById("studentName").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const guardianPhone = document.getElementById("guardianPhone").value;
  const email = document.getElementById("email").value;

  // Check if all fields are filled
  if (!studentName || !address || !phone || !guardianPhone || !email) {
    alert("Please fill all the fields before generating the PDF.");
    return;
  }

  const props = {
    outputType: jsPDFInvoiceTemplate.OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: "Student_Report",
    orientationLandscape: false,
    compress: true,
    logo: {
      src: "https://raw.githubusercontent.com/Filopateernabil25/PDF-JS/main/WhatsApp%20Image%202025-01-17%20at%2006.43.20.jpeg",
      type: "PNG",
      width: 53.33,
      height: 26.66,
      margin: {
        top: 0,
        left: 0,
      },
    },
    business: {
      name: "Syntax Academy",
      address: "Assiut, Al-Gomhoria Street, in front of Bazooka Restaurant",
      phone: "01012329975",
      website: "www.SyntaxAcademy.com",
    },
    contact: {
      label: "Student Name:",
      name: studentName,
      address: address,
      phone: phone,
      email: email,
    },
    invoice: {
      invDate: "Payment Date: 01/01/2023",
      invGenDate: "Invoice Date: 02/01/2023",
      headerBorder: false,
      tableBodyBorder: false,
      rowHeight: 20, // Adds spacing below each row
      header: [
        { title: "#", style: { width: 10 } },
        { title: "Student Name", style: { width: 30 } },
        { title: "Address", style: { width: 30 } },
        { title: "Phone", style: { width: 30 } },
        { title: "Guardian Number", style: { width: 40 } },
        { title: "Email", style: { width: 40 } },
      ],
      table: [[1, studentName, address, phone, guardianPhone, email]],
      invDescLabel: "Suggested questions:",
      invDesc:
        "This file is generated for the purpose of academic record submission. Please ensure the data is accurate and submit it to the concerned authority.",
    },
    footer: {
      text: "This PDF is generated for academic purposes and does not require a signature or stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
  };
  const pdfObject = jsPDFInvoiceTemplate.default(props); // Generates the PDF
  console.log("PDF Object:", pdfObject);
}
const button = document.getElementById("button1");
const message = document.getElementById("welcomeMessage");
const sound1 = document.getElementById("clickSound1");
const sound2 = document.getElementById("clickSound2");

let isMessageVisible = false;

button.addEventListener("click", function () {
  if (!isMessageVisible) {
    // Show message and play the first sound
    message.style.display = "block";
    sound1.play();
  } else {
    // Hide message and play the second sound
    message.style.display = "none";
    sound2.play();
  }
  // Toggle the state
  isMessageVisible = !isMessageVisible;
});
