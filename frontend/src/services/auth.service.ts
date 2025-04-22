import axios from 'axios';

const API_URL = 'http://localhost:5000';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  country?: string;
  city?: string;
  address?: string;
  avatar?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCVV?: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface UpdateUserData {
  firstName?: string;
  lastName?: string;
  phone?: string;
  country?: string;
  city?: string;
  address?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCVV?: string;
}

const isClient = typeof window !== 'undefined';

class AuthService {
  private user: User | null = null;
  private accessToken: string | null = null;

  constructor() {
    if (isClient) {
      this.loadUserData();
    }
  }

  private loadUserData() {
    try {
      if (!isClient) return;

      const token = localStorage.getItem('accessToken');
      const userData = localStorage.getItem('user');

      if (token && userData) {
        this.accessToken = token;
        this.user = JSON.parse(userData);
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных пользователя:', error);
      this.logout();
    }
  }

  public isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  public getUser(): User | null {
    return this.user;
  }

  public getToken(): string | null {
    return this.accessToken;
  }

  public async login(email: string, password: string): Promise<void> {
    try {
      const response = await axios.post<AuthResponse>(`${API_URL}/auth/login`, {
        email,
        password,
      });

      this.accessToken = response.data.accessToken;
      this.user = response.data.user;

      if (isClient) {
        localStorage.setItem('accessToken', this.accessToken);
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    } catch (error) {
      console.error('Ошибка при входе:', error);
      throw error;
    }
  }

  public async register(email: string, password: string, firstName: string, lastName: string): Promise<void> {
    try {
      const response = await axios.post<AuthResponse>(`${API_URL}/auth/register`, {
        email,
        password,
        firstName,
        lastName,
      });

      this.accessToken = response.data.accessToken;
      this.user = response.data.user;

      if (isClient) {
        localStorage.setItem('accessToken', this.accessToken);
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      throw error;
    }
  }

  public async updateProfile(data: UpdateUserData): Promise<User> {
    if (!this.accessToken) {
      throw new Error('Не авторизован');
    }

    try {
      const response = await axios.put<User>(
        `${API_URL}/users/profile`,
        data,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        }
      );

      this.user = { ...this.user, ...response.data };
      if (isClient) {
        localStorage.setItem('user', JSON.stringify(this.user));
      }

      return this.user;
    } catch (error) {
      console.error('Ошибка при обновлении профиля:', error);
      throw error;
    }
  }

  public logout(): void {
    this.accessToken = null;
    this.user = null;
    if (isClient) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
    }
  }
}

export const authService = new AuthService(); 