export type link_type = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'danger' 
  | 'warning' 
  | 'info' 
  | 'light' 
  | 'dark';

export type link_size = 
  | 'sm' 
  | 'md' 
  | 'lg';
export type link = {
    type:link_type
    size:link_size
    text:string 
    href:string
}

export type btn_type = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'danger' 
  | 'warning' 
  | 'info' 
  | 'light' 
  | 'dark';

export type btn_size = 
  | 'sm' 
  | 'md' 
  | 'lg';

export type button = {
    btn_type:btn_type
    btn_size:btn_size
    text:string
}
