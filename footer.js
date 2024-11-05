// Define footer content with URLs
const footerContent = {
  brand: {
    name: "Master Vijay Ram",
    description:
      "Astrologer Vijay Ram is a World Famous Astrologer and Psychic. Contact us now to know more.",
    socialLinks: [
      { name: "Facebook", url: "#" },
      { name: "Twitter", url: "#" },
      { name: "Gmail", url: "#" },
      { name: "LinkedIn", url: "#" },
    ],
  },
  usefulLinks: [
    { name: "Home", url: "#" },
    { name: "Master Vijay Ram", url: "#" },
    { name: "Astrology Services", url: "#" },
    { name: "Astrologer Canada", url: "#" },
    { name: "Astrologer USA", url: "#" },
    { name: "Contact Us", url: "#" },
    { name: "Locations", url: "#" },
    { name: "Gallery", url: "#" },
    { name: "Trust and Foundation", url: "#" },
    { name: "Blogs", url: "#" },
  ],
  astrologyServices: [
    { name: "Get your ex back", url: "#" },
    { name: "Remove Black Magic", url: "#" },
    { name: "Psychic Reader", url: "#" },
    { name: "Evil Energy Removal", url: "#" },
    { name: "Love Psychic", url: "#" },
    { name: "Indian Astrologer", url: "#" },
    { name: "Spiritual Healer", url: "#" },
    { name: "Vashikaran Specialist", url: "#" },
    { name: "Face Reader", url: "#" },
    { name: "Palm Reading", url: "#" },
    { name: "Horoscope Reading", url: "#" },
    { name: "Lotto Max Prediction", url: "#" },
    { name: "Indian God Prayer", url: "#" },
    { name: "Job and Career", url: "#" },
    { name: "Business Problem", url: "#" },
    { name: "Husband Wife Problem", url: "#" },
    { name: "Money Financial Problem", url: "#" },
    { name: "Childless Couples", url: "#" },
    { name: "Marriage Problem", url: "#" },
  ],
  contactUs: {
    canadaPhone: "Canada +1 (437) 214-2199",
    email: "vijayram3312@gmail.com",
    addresses: [
      "5330 Yonge St, North York, ON M2N 5P9",
      "491 Concession St, Hamilton, ON L9A 1C1",
    ],
  },
};

// Get the footer element
const footer = document.getElementById("footer");

// Create Brand Section
const brandDiv = document.createElement("div");
const brandName = document.createElement("h1");
brandName.textContent = footerContent.brand.name;
brandDiv.appendChild(brandName);

const brandDescription = document.createElement("p");
brandDescription.textContent = footerContent.brand.description;
brandDiv.appendChild(brandDescription);

const socialLinksDiv = document.createElement("div");
footerContent.brand.socialLinks.forEach((link) => {
  const socialLink = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.textContent = link.name;
  anchor.href = link.url;
  socialLink.appendChild(anchor);
  socialLinksDiv.appendChild(socialLink);
});
brandDiv.appendChild(socialLinksDiv);
footer.appendChild(brandDiv);

// Create Useful Links Section
const usefulLinksDiv = document.createElement("div");
usefulLinksDiv.classList.add("useful-links");
const usefulLinksHeading = document.createElement("h2");
usefulLinksHeading.textContent = "Useful Links";
usefulLinksDiv.appendChild(usefulLinksHeading);

footerContent.usefulLinks.forEach((link) => {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.textContent = link.name;
  anchor.href = link.url; // Set the URL here
  li.appendChild(anchor);
  usefulLinksDiv.appendChild(li);
});
footer.appendChild(usefulLinksDiv);

// Create Astrology Services Section
const servicesDiv = document.createElement("div");
servicesDiv.classList.add("astrology-services");
const servicesHeading = document.createElement("h2");
servicesHeading.textContent = "Astrology Services";
servicesDiv.appendChild(servicesHeading);

footerContent.astrologyServices.forEach((service) => {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.textContent = service.name;
  anchor.href = service.url; // Set the URL here
  li.appendChild(anchor);
  servicesDiv.appendChild(li);
});
footer.appendChild(servicesDiv);

// Create Contact Us Section
const contactDiv = document.createElement("div");
contactDiv.classList.add("contact-us");
const contactHeading = document.createElement("h2");
contactHeading.textContent = "Contact Us";
contactDiv.appendChild(contactHeading);

const phone = document.createElement("p");
phone.textContent = footerContent.contactUs.canadaPhone;
contactDiv.appendChild(phone);

const email = document.createElement("p");
email.textContent = footerContent.contactUs.email;
contactDiv.appendChild(email);

footerContent.contactUs.addresses.forEach((address) => {
  const addressP = document.createElement("p");
  addressP.textContent = address;
  contactDiv.appendChild(addressP);
});
footer.appendChild(contactDiv);
