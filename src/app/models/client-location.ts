export class ClientLocation
{
    clientLocationID: number; // primary key in ClientLocations table
    clientLocationName: string;

    constructor()
    {
        this.clientLocationID = null;
        this.clientLocationName = null;
    }
}
