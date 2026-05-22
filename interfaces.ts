export interface UserResponse {
  id: string;
  email: string;
  name: string | null;
  github_id: string | null;
  has_github: boolean;
}
