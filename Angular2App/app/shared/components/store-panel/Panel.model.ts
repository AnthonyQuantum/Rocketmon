export class Panel {
   Id: number;
   Image: string;
   Name: string;
   Price: string;
   Type: boolean;

   constructor(Id: number, Image: string, Name: string, Price: string, Type: boolean) {
       this.Id = Id;
        this.Image = Image;
        this.Name = Name;
        this.Price = Price;
        this.Type = Type;
       }  

}