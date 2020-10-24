create table t_credentials_cre
(
	cre_id serial not null
		constraint t_credentials_cre_pk
			primary key,
	cre_email varchar(250) not null,
	cre_active bool default true not null,
	cre_created_at timestamp default now() not null,
	cre_updated_at timestamp default now() not null
);

create unique index t_credentials_cre_cre_email_uindex
	on t_credentials_cre (cre_email);

create table tj_credentials_city
(
	cre_id int not null
		constraint tj_credentials_city_t_credentials_cre_cre_id_fk
			references t_credentials_cre,
	postal_code int not null,
	created_at timestamp default now() not null,
	active bool default true not null,
	constraint tj_credentials_city_pk
		primary key (cre_id, postal_code)
);

create table t_password_pas
(
	pas_hash text not null,
	pas_created_at timestamp default now() not null,
	pas_active bool default true not null,
	cre_id int not null
		constraint t_password_pas_t_credentials_cre_cre_id_fk
			references t_credentials_cre
);

create table t_group_gro
(
	gro_id serial not null
		constraint t_group_gro_pk
			primary key,
	gro_name varchar(250) not null,
	gro_private bool default false not null,
	gro_postal_code int not null,
	gro_created_at timestamp default now() not null,
	gro_updated_at timestamp default now() not null,
	cre_id int not null
		constraint t_group_gro_t_credentials_cre_cre_id_fk
			references t_credentials_cre
);

create table t_reason_rea
(
	rea_id serial not null
		constraint t_reason_rea_pk
			primary key,
	rea_content text default 'non défini' not null,
	cre_id int not null
		constraint t_reason_rea_t_credentials_cre_cre_id_fk
			references t_credentials_cre,
	gro_id int not null
		constraint t_reason_rea_t_group_gro_gro_id_fk
			references t_group_gro
);

