export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const validateName = (name) => {
    const nameRegex = /^[A-Za-zÀ-ÿ' -]+$/;
    return name.trim() !== '' && nameRegex.test(name);
};

export const validateCity = (city) => {
    return /^[a-zA-ZÀ-ÿ' -]+$/.test(city);
};

export const validatePostalCode = (codePostal) => {
    return /^[0-9]{5}$/.test(codePostal);
};

export const validateDateOfBirth = (date) => {
    const dateOfBirth = new Date(date);
    if (isNaN(dateOfBirth.getTime())) {
        return false;
    }
    const today = new Date();
    const age = today.getFullYear() - dateOfBirth.getFullYear();
    const isUnder18 = age < 18 || (age === 18 && today < new Date(dateOfBirth.setFullYear(dateOfBirth.getFullYear() + 18)));

    return !isUnder18;
};


