import type { Schema, Struct } from '@strapi/strapi';

export interface BlogBlog extends Struct.ComponentSchema {
  collectionName: 'components_blog_blogs';
  info: {
    displayName: 'blog';
  };
  attributes: {
    blog_content: Schema.Attribute.Component<'blog.blog-content', true>;
    blog_header: Schema.Attribute.Component<'blog.blog-header', false>;
    blog_redirect: Schema.Attribute.Component<'blog.blog-redirect', false>;
  };
}

export interface BlogBlogContent extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_contents';
  info: {
    displayName: 'blog_content';
  };
  attributes: {
    content: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
  };
}

export interface BlogBlogHeader extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_headers';
  info: {
    displayName: 'blog_header';
  };
  attributes: {
    autor: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    categoria: Schema.Attribute.String;
    dia_publicacion: Schema.Attribute.String;
    img_header: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mes_publicacion: Schema.Attribute.String;
    puesto: Schema.Attribute.String;
    tiempo_lectura: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface BlogBlogRedirect extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_redirects';
  info: {
    displayName: 'blog_redirect';
  };
  attributes: {
    btn: Schema.Attribute.Component<'reutilizable.button', false>;
    texto: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface FooterGoarFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_goar_footers';
  info: {
    displayName: 'goar_footer';
  };
  attributes: {
    contacto: Schema.Attribute.Component<'reutilizable.desplegable', false>;
    descripcion: Schema.Attribute.Component<'reutilizable.titulo', false>;
    servicios: Schema.Attribute.Component<'reutilizable.desplegable', false>;
    social: Schema.Attribute.Component<'reutilizable.social-links', true>;
  };
}

export interface FooterTerFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_ter_footers';
  info: {
    displayName: 'ter_footer';
  };
  attributes: {
    contenido: Schema.Attribute.Component<'reutilizable.desplegable', false>;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Informacion_contacto: Schema.Attribute.Component<
      'reutilizable.desplegable',
      false
    >;
    social_link: Schema.Attribute.Component<'reutilizable.social-links', true>;
    texto: Schema.Attribute.Text;
    tiulo: Schema.Attribute.String;
  };
}

export interface FormTerForm extends Struct.ComponentSchema {
  collectionName: 'components_form_ter_forms';
  info: {
    displayName: 'ter_form';
  };
  attributes: {
    correo: Schema.Attribute.String;
    fecha_publicacion: Schema.Attribute.DateTime;
    mensaje: Schema.Attribute.Text;
    nombre: Schema.Attribute.String;
    numero_casa: Schema.Attribute.String;
    servicio: Schema.Attribute.String;
    telefono: Schema.Attribute.String;
  };
}

export interface ReutilizableButton extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    btn_color: Schema.Attribute.String;
    btn_id: Schema.Attribute.Integer;
    btn_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    btn_img_url: Schema.Attribute.String;
    btn_link: Schema.Attribute.String;
    btn_text: Schema.Attribute.String;
  };
}

export interface ReutilizableCard extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    btn: Schema.Attribute.Component<'reutilizable.button', false>;
    card_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Schema.Attribute.Component<'reutilizable.card-content', true>;
    text: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface ReutilizableCardContent extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_card_contents';
  info: {
    displayName: 'card_content';
  };
  attributes: {
    content_btn: Schema.Attribute.Component<'reutilizable.button', false>;
    content_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    content_text: Schema.Attribute.Text;
    content_title: Schema.Attribute.String;
  };
}

export interface ReutilizableDesplegable extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_desplegables';
  info: {
    displayName: 'Desplegable';
  };
  attributes: {
    desplegable_btn: Schema.Attribute.Component<'reutilizable.button', true>;
    desplegable_link: Schema.Attribute.String;
    desplegable_titulo: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ReutilizableDinamicQuote extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_dinamic_quotes';
  info: {
    displayName: 'dinamic_quote';
  };
  attributes: {
    dinamic_btn: Schema.Attribute.Component<'reutilizable.button', false>;
    dinamic_id: Schema.Attribute.String;
    dinamic_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    dinamic_subtitulo: Schema.Attribute.String;
    dinamic_text: Schema.Attribute.Text;
    dinamic_titulo: Schema.Attribute.String;
  };
}

export interface ReutilizableFooter extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    footer_empresas: Schema.Attribute.Component<'reutilizable.titulo', true>;
    footer_info_btn: Schema.Attribute.Component<
      'reutilizable.desplegable',
      true
    >;
    footer_inicio_btn: Schema.Attribute.Component<'reutilizable.button', false>;
    titulo: Schema.Attribute.Component<'reutilizable.titulo', false>;
  };
}

export interface ReutilizableForm extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    form_apellido: Schema.Attribute.String;
    form_email: Schema.Attribute.Email;
    form_fecha_envio: Schema.Attribute.DateTime;
    form_mensaje: Schema.Attribute.Text;
    form_nombre: Schema.Attribute.String;
    form_telefono: Schema.Attribute.String;
  };
}

export interface ReutilizableNavbar extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    navbar_btn: Schema.Attribute.Component<'reutilizable.button', true>;
    navbar_desplegable: Schema.Attribute.Component<
      'reutilizable.desplegable',
      false
    >;
    navbar_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    navbar_social: Schema.Attribute.Component<
      'reutilizable.social-links',
      true
    >;
  };
}

export interface ReutilizableSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_social_links';
  info: {
    displayName: 'social_links';
  };
  attributes: {
    btn: Schema.Attribute.Component<'reutilizable.button', false>;
    btn_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ReutilizableSubQuotes extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_sub_quotes';
  info: {
    displayName: 'Sub_Quotes';
  };
  attributes: {
    script_id: Schema.Attribute.String;
    sub_quote_btn: Schema.Attribute.Component<'reutilizable.button', false>;
    sub_quote_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    sub_quote_subtitle: Schema.Attribute.String;
    sub_quote_text: Schema.Attribute.Text;
    sub_quote_title: Schema.Attribute.String;
  };
}

export interface ReutilizableTitulo extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_titulos';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    quote_btn: Schema.Attribute.Component<'reutilizable.button', false>;
    quote_descripcion: Schema.Attribute.Text;
    quote_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quote_subtitulo: Schema.Attribute.Text;
    quote_text: Schema.Attribute.Text;
    quote_titulo: Schema.Attribute.String;
    scrip_id: Schema.Attribute.String;
    sub_quote: Schema.Attribute.Component<'reutilizable.sub-quotes', true>;
    video_url: Schema.Attribute.String;
  };
}

export interface ReutilizableWpBtn extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_wp_btns';
  info: {
    displayName: 'wp_btn';
  };
  attributes: {
    wp_btn_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    wp_btn_link: Schema.Attribute.String;
    wp_btn_mensaje: Schema.Attribute.Text;
    wp_btn_subtitulo: Schema.Attribute.String;
    wp_btn_titulo: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keyWords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.blog': BlogBlog;
      'blog.blog-content': BlogBlogContent;
      'blog.blog-header': BlogBlogHeader;
      'blog.blog-redirect': BlogBlogRedirect;
      'footer.goar-footer': FooterGoarFooter;
      'footer.ter-footer': FooterTerFooter;
      'form.ter-form': FormTerForm;
      'reutilizable.button': ReutilizableButton;
      'reutilizable.card': ReutilizableCard;
      'reutilizable.card-content': ReutilizableCardContent;
      'reutilizable.desplegable': ReutilizableDesplegable;
      'reutilizable.dinamic-quote': ReutilizableDinamicQuote;
      'reutilizable.footer': ReutilizableFooter;
      'reutilizable.form': ReutilizableForm;
      'reutilizable.navbar': ReutilizableNavbar;
      'reutilizable.social-links': ReutilizableSocialLinks;
      'reutilizable.sub-quotes': ReutilizableSubQuotes;
      'reutilizable.titulo': ReutilizableTitulo;
      'reutilizable.wp-btn': ReutilizableWpBtn;
      'shared.seo': SharedSeo;
    }
  }
}
