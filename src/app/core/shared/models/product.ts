export interface Product {
    createdTime: string;
    fields: {
      category: string;
      image: [{
        url:string
      }];
      name: string;
      description:string;
      modified_at: string;
      modified_by:{
          id:string;
          email:string;
          name:string
      };
      pvp_unitary:string;
      pvp_wholesale:string;
      retail_price:string;
      status:string;
      subcategories:[];
      wholesale_price:0;
      weekly_option:boolean;
    };
    id: string;
}
