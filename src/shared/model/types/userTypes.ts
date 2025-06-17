interface IUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  active_until_date?: string;
  user_permissions: string[];
  // для теста
  manager?: {
    name: string;
    phone: string;
  };

  company_type: string;
  active_company_name: string;
  debt: number;

  annual_turnover?: {
    title: string;
    header: number;
    semen?: {
      label: string;
      count: number;
    }[];
  };

  deliveries?: {
    title: string;
    content?: {
      label: string;
      count: number;
    }[];
    date?: {
      label: string;
      value: string;
    };
  };

  cattle?: {
    title: string;
    header: number;
    animals?: {
      label: string;
      count: number;
    }[];
    date?: {
      label: string;
      value: string;
    };
  };

  staff?: {
    title: string;
    content?: {
      role: string;
      name: string;
      phone: string;
      mail: string;
    }[];
    contacts_title: string;
    contacts?: {
      type: string;
      list: string[];
    }[];
  };

  managers?: {
    title: string;
    content?: {
      role: string;
      name: string;
      phone: string;
      mail: string;
    }[];
  };

  details?: {
    title: string;
    content?: {
      type: string;
      adress: string;
    }[];
  };

  assignments?: {
    title: string;
    header: number;
    assignment_status: string;
    content?: {
      regular: string;
      period: string;
      total_doses: number;
      shipped_doses: number;
      left_doses: number;
      dealings: number;
    };
    content_labels?: {
      regular: string;
      period: string;
      total_doses: string;
      shipped_doses: string;
      left_doses: string;
      dealings: string;
    };
  }[];
}

export type UserApiResponse = IUser;
