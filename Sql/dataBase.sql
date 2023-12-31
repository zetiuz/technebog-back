PGDMP      /                {         	   TechNeBog    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24586 	   TechNeBog    DATABASE     �   CREATE DATABASE "TechNeBog" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Venezuela.1252';
    DROP DATABASE "TechNeBog";
                postgres    false            �            1259    32801 	   Contactos    TABLE     �   CREATE TABLE public."Contactos" (
    id integer NOT NULL,
    name character varying(255),
    "numeroCuenta" integer,
    descripcion character varying(255),
    "UsuarioId" integer
);
    DROP TABLE public."Contactos";
       public         heap    postgres    false            �            1259    32800    Contactos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Contactos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Contactos_id_seq";
       public          postgres    false    218            �           0    0    Contactos_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Contactos_id_seq" OWNED BY public."Contactos".id;
          public          postgres    false    217            �            1259    32792    Usuarios    TABLE     �   CREATE TABLE public."Usuarios" (
    id integer NOT NULL,
    "userName" character varying(255),
    name character varying(255),
    password character varying(255),
    saldo numeric,
    email character varying(255),
    number integer
);
    DROP TABLE public."Usuarios";
       public         heap    postgres    false            �            1259    32791    Usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Usuarios_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Usuarios_id_seq";
       public          postgres    false    216            �           0    0    Usuarios_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Usuarios_id_seq" OWNED BY public."Usuarios".id;
          public          postgres    false    215                        2604    32804    Contactos id    DEFAULT     p   ALTER TABLE ONLY public."Contactos" ALTER COLUMN id SET DEFAULT nextval('public."Contactos_id_seq"'::regclass);
 =   ALTER TABLE public."Contactos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218                       2604    32795    Usuarios id    DEFAULT     n   ALTER TABLE ONLY public."Usuarios" ALTER COLUMN id SET DEFAULT nextval('public."Usuarios_id_seq"'::regclass);
 <   ALTER TABLE public."Usuarios" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    32801 	   Contactos 
   TABLE DATA           Y   COPY public."Contactos" (id, name, "numeroCuenta", descripcion, "UsuarioId") FROM stdin;
    public          postgres    false    218   �       �          0    32792    Usuarios 
   TABLE DATA           Z   COPY public."Usuarios" (id, "userName", name, password, saldo, email, number) FROM stdin;
    public          postgres    false    216   �       �           0    0    Contactos_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Contactos_id_seq"', 4, true);
          public          postgres    false    217            �           0    0    Usuarios_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Usuarios_id_seq"', 1, false);
          public          postgres    false    215            $           2606    32808    Contactos Contactos_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Contactos"
    ADD CONSTRAINT "Contactos_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Contactos" DROP CONSTRAINT "Contactos_pkey";
       public            postgres    false    218            "           2606    32799    Usuarios Usuarios_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Usuarios" DROP CONSTRAINT "Usuarios_pkey";
       public            postgres    false    216            %           2606    32809 "   Contactos Contactos_UsuarioId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Contactos"
    ADD CONSTRAINT "Contactos_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES public."Usuarios"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 P   ALTER TABLE ONLY public."Contactos" DROP CONSTRAINT "Contactos_UsuarioId_fkey";
       public          postgres    false    216    4642    218            �   )   x�3��M,�L�� .t#ΔҜ�TNSNC7F��� �w�      �   ]   x�3��M,�L4202����K2sr�9��ML9M 鹉�9z����1~\F�^�ũ ��J���*NSc#CNC�� UC� �/c     