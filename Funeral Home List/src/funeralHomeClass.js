export class FuneralHome {
    constructor(name, cityState, streetAddress, phone, email, website, zip) {
        this.name = name;
        this.cityState = cityState;
        this.streetAddress = streetAddress;
        this.phone = phone;
        this.email = email;
        this.website = website;
        this.zip = zip;
        this.fullAddress = `${this.streetAddress}, ${this.cityState} ${this.zip}`;
    }

}

