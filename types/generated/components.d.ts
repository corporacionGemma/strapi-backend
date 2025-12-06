import type { Schema, Struct } from '@strapi/strapi';

export interface ReutilizableButton extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    btn_color: Schema.Attribute.String;
    btn_id: Schema.Attribute.Integer;
    btn_link: Schema.Attribute.String;
    btn_text: Schema.Attribute.String;
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
  };
}

export interface ReutilizableSubQuotes extends Struct.ComponentSchema {
  collectionName: 'components_reutilizable_sub_quotes';
  info: {
    displayName: 'Sub_Quotes';
  };
  attributes: {
    sub_quote_btn: Schema.Attribute.Component<'reutilizable.button', false>;
    sub_quote_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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
    quote_titulo: Schema.Attribute.String;
    sub_quote: Schema.Attribute.Component<'reutilizable.sub-quotes', true>;
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
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'reutilizable.button': ReutilizableButton;
      'reutilizable.desplegable': ReutilizableDesplegable;
      'reutilizable.footer': ReutilizableFooter;
      'reutilizable.form': ReutilizableForm;
      'reutilizable.navbar': ReutilizableNavbar;
      'reutilizable.sub-quotes': ReutilizableSubQuotes;
      'reutilizable.titulo': ReutilizableTitulo;
      'reutilizable.wp-btn': ReutilizableWpBtn;
      'shared.seo': SharedSeo;
    }
  }
}
