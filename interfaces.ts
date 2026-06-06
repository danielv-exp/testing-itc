interface UserResponse {
  id: string;
  email: string;
  name: string | null;
  github_id: string | null;
  has_github: boolean;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
