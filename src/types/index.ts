export interface Service {
  id: string;
  title: string;
  description: string;
  list: string[];
  icon: string;
  cardBgImg: string;
  contentImage: string;
  content: {
    title: string;
    details: string;
    list: {
      li: string;
    }[];
  }[];
}

export interface Products {
  id: string;
  image: string;
  icon: string;
  title: string;
  description: string;
  list: {
    key: string;
    value: string;
  }[];
  content: (
    {
        title: string;
        intro: string;
        description: string;
        quote: {
          quote?: undefined;
          author?: undefined;
        };
        images: never[];
        list: {
          li: string;
        }[];
      }
    | {
        title: string;
        intro: string;
        description: string;
        quote: {
          quote: string;
          author: string;
        };
        images: never[];
        list: {
          li: string;
        }[];
      }
    | {
        title: string;
        intro: string;
        description: string;
        quote: {
          quote: string;
          author: string;
        };
        list: never[];
        images: string[];
      }
  )[];
}
