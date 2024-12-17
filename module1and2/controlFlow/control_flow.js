let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}


let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

let userType = "subscriber";
let userCategory;

switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";        
}

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log ("Access level: ", accessLevel);
console.log ("User Message: ", userMessage);
console.log ("User Category: ", userCategory);
console.log("Authentication Status:", authenticationStatus);



let roleInOrganization = "Enrolled Member";
let organizationUserPrivelegs;

switch (roleInOrganization){
    case "Employee":
        organizationUserPrivelegs = "You have full Diatery Servives access";
        break;
    case "Enrolled Member":
        organizationUserPrivelegs = "You have full Diatery Servives access and one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        organizationUserPrivelegs = "You have a partial access to Diatery Servives";
        break;
    case "Non-Subscriber":
        organizationUserPrivelegs = "You need to enroll any other role to get an access";
        break;
    default:
        organizationUserPrivelegs = "Unsupported role was caught";
}

console.log("You are ",roleInOrganization, " ", organizationUserPrivelegs);



