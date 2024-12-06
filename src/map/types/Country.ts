class Pin {
    longitude: number;
    latitude: number;

    constructor(longitude: number, latitude: number) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
}

class Circle {
    longitude: number;
    latitude: number;
    radius: number;

    constructor(longitude: number, latitude: number, radius: number) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.radius = radius;
    }
}

class Country {
    id: string;
    currency: string;
    content: string;
    pin: Pin | null;
    circle: Circle | null;

    constructor(id: string, currency: string, content: string, pin: Pin | null = null, circle: Circle | null = null) {
        this.id = id;
        this.currency = currency;
        this.content = content;
        this.pin = pin;
        this.circle = circle;
    }
}
export { Pin, Circle, Country };
