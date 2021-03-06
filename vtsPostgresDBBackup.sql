PGDMP     9            	        x            postgres    12.1    12.1     _           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            `           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            a           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            b           1262    13635    postgres    DATABASE     f   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';
    DROP DATABASE postgres;
                postgres    false            c           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3170                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            d           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    1            �            1259    16562    advisor    TABLE     K  CREATE TABLE public.advisor (
    id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    phone_number character varying(50) NOT NULL,
    email character varying(355) NOT NULL,
    password character varying(50) NOT NULL,
    last_login timestamp without time zone
);
    DROP TABLE public.advisor;
       public         heap    postgres    false            �            1259    16560    advisor_id_seq    SEQUENCE     �   CREATE SEQUENCE public.advisor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.advisor_id_seq;
       public          postgres    false    208            e           0    0    advisor_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.advisor_id_seq OWNED BY public.advisor.id;
          public          postgres    false    207            �            1259    16395    student    TABLE     �  CREATE TABLE public.student (
    id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    student_num character varying(50) NOT NULL,
    email character varying(355) NOT NULL,
    password character varying(50) NOT NULL,
    age integer NOT NULL,
    grade integer NOT NULL,
    created_on timestamp without time zone NOT NULL,
    last_login timestamp without time zone
);
    DROP TABLE public.student;
       public         heap    postgres    false            �            1259    16393    student_id_seq    SEQUENCE     �   CREATE SEQUENCE public.student_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.student_id_seq;
       public          postgres    false    204            f           0    0    student_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.student_id_seq OWNED BY public.student.id;
          public          postgres    false    203            �            1259    16551    student_log    TABLE       CREATE TABLE public.student_log (
    id integer NOT NULL,
    student_id integer NOT NULL,
    activity_date date NOT NULL,
    description character varying(500) NOT NULL,
    logged_hours integer NOT NULL,
    category character varying(500) NOT NULL
);
    DROP TABLE public.student_log;
       public         heap    postgres    false            �            1259    16549    student_log_id_seq    SEQUENCE     �   CREATE SEQUENCE public.student_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.student_log_id_seq;
       public          postgres    false    206            g           0    0    student_log_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.student_log_id_seq OWNED BY public.student_log.id;
          public          postgres    false    205            �           2604    16565 
   advisor id    DEFAULT     h   ALTER TABLE ONLY public.advisor ALTER COLUMN id SET DEFAULT nextval('public.advisor_id_seq'::regclass);
 9   ALTER TABLE public.advisor ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    208    208            �           2604    16398 
   student id    DEFAULT     h   ALTER TABLE ONLY public.student ALTER COLUMN id SET DEFAULT nextval('public.student_id_seq'::regclass);
 9   ALTER TABLE public.student ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    204    204            �           2604    16554    student_log id    DEFAULT     p   ALTER TABLE ONLY public.student_log ALTER COLUMN id SET DEFAULT nextval('public.student_log_id_seq'::regclass);
 =   ALTER TABLE public.student_log ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    205    206            \          0    16562    advisor 
   TABLE DATA           g   COPY public.advisor (id, first_name, last_name, phone_number, email, password, last_login) FROM stdin;
    public          postgres    false    208   !       X          0    16395    student 
   TABLE DATA           ~   COPY public.student (id, first_name, last_name, student_num, email, password, age, grade, created_on, last_login) FROM stdin;
    public          postgres    false    204   r!       Z          0    16551    student_log 
   TABLE DATA           i   COPY public.student_log (id, student_id, activity_date, description, logged_hours, category) FROM stdin;
    public          postgres    false    206   #       h           0    0    advisor_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.advisor_id_seq', 1, false);
          public          postgres    false    207            i           0    0    student_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.student_id_seq', 24, true);
          public          postgres    false    203            j           0    0    student_log_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.student_log_id_seq', 125, true);
          public          postgres    false    205            �           2606    16572    advisor advisor_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.advisor
    ADD CONSTRAINT advisor_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.advisor DROP CONSTRAINT advisor_email_key;
       public            postgres    false    208            �           2606    16570    advisor advisor_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.advisor
    ADD CONSTRAINT advisor_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.advisor DROP CONSTRAINT advisor_pkey;
       public            postgres    false    208            �           2606    16405    student student_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_email_key UNIQUE (email);
 C   ALTER TABLE ONLY public.student DROP CONSTRAINT student_email_key;
       public            postgres    false    204            �           2606    16559    student_log student_log_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.student_log
    ADD CONSTRAINT student_log_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.student_log DROP CONSTRAINT student_log_pkey;
       public            postgres    false    206            �           2606    16403    student student_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.student DROP CONSTRAINT student_pkey;
       public            postgres    false    204            \   J   x�3������t�O�43��561�5261��J�Ou�L����K���,,O-*�420��54�52P00�#�=... ��i      X   �  x����n�0�ח��d�kc���HE�%����`h̸��V�}�a4�R5Fbs�~������1�7��w@!y
���U�ܦv=T���g��2~���_Rz�M^0�^%�^�
֌T&b�_�ƎPt��.��DJao|߹��^かT"��,Kw�s�Ek"�J���F���]�4Ώ�e�Vk�a��t��J@\��a�U�৲o���$G����I5[����[�mw�7�0P�ij�~Oj����U�}g�39Q쉲L��W���T����ԥHᏳ������rv�Y��ڊ�jw�+k��$�� ��N�����rL&��C�+�ύDA����OX#c�l�Z�xb�j��ȉ�A;���hw5m����v
����A+s�L�__d��&I��e%�      Z   �  x��XMo�8=ӿB���c7Ȣ�(���uGG
d9@���܊��%�������{��,�%!�A�_OU;C_�g��c���]�V��Ε�Fd	�~.�����r.�����0/ŷ_�lw&n��J��S]�Xu��.ޫ�U(�bH�O�?}���x|��a$U@0�u��������6���O8�C��x���S�|�2� �R�?�����U{�G �I�~�_S�XƂթ����n�43U X��
�Ts$ˁf�h=A�>����P<�\�Ë �R]�
��=F�8m���e-y��LV\~ֵ4��U���\��ʖ��W�-)���[i��19��1�\.��[)̬,���G�}���Y6\��Y6;����p�y���GG�X�m�.	(e���˴!�U�4��}kق�QhI�O��2�~�9�$:�,����Ё@3F���k����W��ᢼu����`��q���H]S�����2l[n�BsR�C�R�-7�.�f���.R�,7�B�-w�?�Ҏ[ Sf\���]����RK�d��M-_B�C�Xh���ħ�������\h���kZ����8د�͛gm��������,c�ӸL�~=b�\�g'P��"r&8OW^3�	"�	��8/~�	�X���:��	�|I����5����=�ۦ��ӽ!��7?���e(^�g<I�]ޒf���|���Iǆ��},؎� � #0�wD�Z���̊�WcJ:�Fl�&��s���`���G���&x�M�&��]�)E��&��AB��`�]�|>��Y.�#x#;�q
���T K�'u�"����݌�D���p^�D�L| ����(��}��L:A ��&�!lu��Bv����G�Ws����`5I�K����kȭ0)���rNS�I�bԊR/��@��
�K��T�d���Mߕ�����v��N!D     