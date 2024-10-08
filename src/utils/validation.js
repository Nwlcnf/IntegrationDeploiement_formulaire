export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const validateName = (name) => {
    return /^[a-zA-ZÀ-ÿ' -]+$/.test(name);
};

export const validateCity = (city) => {
    return /^[a-zA-ZÀ-ÿ' -]+$/.test(city);
};

export const validatePostalCode = (codePostal) => {
    return /^[0-9]{5}$/.test(codePostal);
};

export const validateDateOfBirth = (dateNaissance) => {
    const birthDate = new Date(dateNaissance);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age >= 18;
};

