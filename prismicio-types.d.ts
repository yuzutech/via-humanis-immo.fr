// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Qui sommes nous documents */
interface AboutDocumentData {
  /**
   * Slice Zone field in *Qui sommes nous*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<AboutDocumentDataSlicesSlice>;
}
/**
 * Slice for *Qui sommes nous → Slice Zone*
 *
 */
type AboutDocumentDataSlicesSlice = OverviewSlice;
/**
 * Qui sommes nous document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<AboutDocumentData>,
    "about",
    Lang
  >;
/** Content for Accueil documents */
interface AccueilDocumentData {
  /**
   * Slice Zone field in *Accueil*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: accueil.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<AccueilDocumentDataSlicesSlice>;
}
/**
 * Slice for *Accueil → Slice Zone*
 *
 */
type AccueilDocumentDataSlicesSlice =
  | TestimoniesSlice
  | TeamCalloutSlice
  | LatestNewsSlice
  | ValuePropositionSlice
  | ProjectsSlice;
/**
 * Accueil document from Prismic
 *
 * - **API ID**: `accueil`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AccueilDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<AccueilDocumentData>,
    "accueil",
    Lang
  >;
/** Content for Gestion documents */
interface GestionDocumentData {
  /**
   * Slice Zone field in *Gestion*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: gestion.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<GestionDocumentDataSlicesSlice>;
}
/**
 * Slice for *Gestion → Slice Zone*
 *
 */
type GestionDocumentDataSlicesSlice =
  | OverviewSlice
  | StrengthsSlice
  | OffersSlice
  | ContactBlockSlice
  | OffersCompareSlice
  | ProjectsSlice;
/**
 * Gestion document from Prismic
 *
 * - **API ID**: `gestion`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GestionDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<GestionDocumentData>,
    "gestion",
    Lang
  >;
/** Content for Location documents */
interface LocationDocumentData {
  /**
   * Slice Zone field in *Location*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: location.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<LocationDocumentDataSlicesSlice>;
}
/**
 * Slice for *Location → Slice Zone*
 *
 */
type LocationDocumentDataSlicesSlice =
  | OverviewSlice
  | StrengthsSlice
  | ContactBlockSlice
  | EstimateFormSlice
  | ProjectsSlice;
/**
 * Location document from Prismic
 *
 * - **API ID**: `location`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LocationDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<LocationDocumentData>,
    "location",
    Lang
  >;
/** Content for Actualité documents */
interface NewsDocumentData {
  /**
   * illustration field in *Actualité*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news.illustration
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  illustration: prismicT.ImageField<never>;
  /**
   * title field in *Actualité*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * date field in *Actualité*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: news.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
   *
   */
  date: prismicT.TimestampField;
  /**
   * text field in *Actualité*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismicT.RichTextField;
  /**
   * featured field in *Actualité*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: news.featured
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  featured: prismicT.BooleanField;
}
/**
 * Actualité document from Prismic
 *
 * - **API ID**: `news`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<Simplify<NewsDocumentData>, "news", Lang>;
/** Content for Projet documents */
interface ProjectDocumentData {
  /**
   * title field in *Projet*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * type field in *Projet*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Gestion
   * - **API ID Path**: project.type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  type: prismicT.SelectField<
    "Gestion" | "Loué" | "En location" | "Achat" | "Vendu",
    "filled"
  >;
  /**
   * illustration field in *Projet*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.illustration
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  illustration: prismicT.ImageField<never>;
  /**
   * city field in *Projet*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.city
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  city: prismicT.KeyTextField;
  /**
   * date field in *Projet*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: project.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  date: prismicT.DateField;
  /**
   * description field in *Projet*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Slice Zone field in *Projet*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<ProjectDocumentDataSlicesSlice>;
}
/**
 * Slice for *Projet → Slice Zone*
 *
 */
type ProjectDocumentDataSlicesSlice = never;
/**
 * Projet document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;
/** Content for Vente documents */
interface VenteDocumentData {
  /**
   * Slice Zone field in *Vente*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: vente.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<VenteDocumentDataSlicesSlice>;
}
/**
 * Slice for *Vente → Slice Zone*
 *
 */
type VenteDocumentDataSlicesSlice =
  | OverviewSlice
  | StrengthsSlice
  | ContactBlockSlice
  | EstimateFormSlice
  | ProjectsSlice;
/**
 * Vente document from Prismic
 *
 * - **API ID**: `vente`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type VenteDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<VenteDocumentData>,
    "vente",
    Lang
  >;
export type AllDocumentTypes =
  | AboutDocument
  | AccueilDocument
  | GestionDocument
  | LocationDocument
  | NewsDocument
  | ProjectDocument
  | VenteDocument;
/**
 * Primary content in ContactBlock → Primary
 *
 */
interface ContactBlockSliceDefaultPrimary {
  /**
   * title field in *ContactBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_block.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * description field in *ContactBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_block.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * action field in *ContactBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_block.primary.action
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  action: prismicT.RichTextField;
  /**
   * illustration field in *ContactBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_block.primary.illustration
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  illustration: prismicT.ImageField<never>;
}
/**
 * Default variation for ContactBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactBlockSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<ContactBlockSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *ContactBlock*
 *
 */
type ContactBlockSliceVariation = ContactBlockSliceDefault;
/**
 * ContactBlock Shared Slice
 *
 * - **API ID**: `contact_block`
 * - **Description**: `ContactBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactBlockSlice = prismicT.SharedSlice<
  "contact_block",
  ContactBlockSliceVariation
>;
/**
 * Primary content in EstimateForm → Primary
 *
 */
interface EstimateFormSliceDefaultPrimary {
  /**
   * illustration field in *EstimateForm → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: estimate_form.primary.illustration
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  illustration: prismicT.ImageField<never>;
  /**
   * title field in *EstimateForm → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: estimate_form.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * description field in *EstimateForm → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: estimate_form.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
}
/**
 * Default variation for EstimateForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EstimateFormSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<EstimateFormSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *EstimateForm*
 *
 */
type EstimateFormSliceVariation = EstimateFormSliceDefault;
/**
 * EstimateForm Shared Slice
 *
 * - **API ID**: `estimate_form`
 * - **Description**: `EstimateForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EstimateFormSlice = prismicT.SharedSlice<
  "estimate_form",
  EstimateFormSliceVariation
>;
/**
 * Primary content in LatestNews → Primary
 *
 */
interface LatestNewsSliceDefaultPrimary {
  /**
   * title field in *LatestNews → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: latest_news.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * view_all_text_button field in *LatestNews → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: latest_news.primary.view_all_text_button
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  view_all_text_button: prismicT.KeyTextField;
}
/**
 * Default variation for LatestNews Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LatestNewsSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<LatestNewsSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *LatestNews*
 *
 */
type LatestNewsSliceVariation = LatestNewsSliceDefault;
/**
 * LatestNews Shared Slice
 *
 * - **API ID**: `latest_news`
 * - **Description**: `LatestNews`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LatestNewsSlice = prismicT.SharedSlice<
  "latest_news",
  LatestNewsSliceVariation
>;
/**
 * Primary content in Offers → Primary
 *
 */
interface OffersSliceDefaultPrimary {
  /**
   * title field in *Offers → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offers.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * subtitle field in *Offers → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offers.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subtitle: prismicT.KeyTextField;
}
/**
 * Item in Offers → Items
 *
 */
export interface OffersSliceDefaultItem {
  /**
   * icon field in *Offers → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: offers.items[].icon
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon: prismicT.ImageField<never>;
  /**
   * name field in *Offers → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offers.items[].name
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismicT.KeyTextField;
  /**
   * tagline field in *Offers → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offers.items[].tagline
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  tagline: prismicT.KeyTextField;
  /**
   * description field in *Offers → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offers.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * button field in *Offers → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offers.items[].button
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button: prismicT.KeyTextField;
  /**
   * recommended field in *Offers → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: offers.items[].recommended
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  recommended: prismicT.BooleanField;
  /**
   * premium field in *Offers → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: offers.items[].premium
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  premium: prismicT.BooleanField;
}
/**
 * Default variation for Offers Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OffersSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<OffersSliceDefaultPrimary>,
  Simplify<OffersSliceDefaultItem>
>;
/**
 * Slice variation for *Offers*
 *
 */
type OffersSliceVariation = OffersSliceDefault;
/**
 * Offers Shared Slice
 *
 * - **API ID**: `offers`
 * - **Description**: `Offers`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OffersSlice = prismicT.SharedSlice<"offers", OffersSliceVariation>;
/**
 * Primary content in OffersCompare → Primary
 *
 */
interface OffersCompareSliceDefaultPrimary {
  /**
   * title field in *OffersCompare → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offers_compare.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * disclaimer field in *OffersCompare → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offers_compare.primary.disclaimer
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  disclaimer: prismicT.KeyTextField;
}
/**
 * Item in OffersCompare → Items
 *
 */
export interface OffersCompareSliceDefaultItem {
  /**
   * feature field in *OffersCompare → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offers_compare.items[].feature
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  feature: prismicT.KeyTextField;
  /**
   * offer1_has_feature field in *OffersCompare → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: offers_compare.items[].offer1_has_feature
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  offer1_has_feature: prismicT.BooleanField;
  /**
   * offer2_has_feature field in *OffersCompare → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: offers_compare.items[].offer2_has_feature
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  offer2_has_feature: prismicT.BooleanField;
  /**
   * offer3_has_feature field in *OffersCompare → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: offers_compare.items[].offer3_has_feature
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  offer3_has_feature: prismicT.BooleanField;
}
/**
 * Default variation for OffersCompare Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OffersCompareSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<OffersCompareSliceDefaultPrimary>,
  Simplify<OffersCompareSliceDefaultItem>
>;
/**
 * Slice variation for *OffersCompare*
 *
 */
type OffersCompareSliceVariation = OffersCompareSliceDefault;
/**
 * OffersCompare Shared Slice
 *
 * - **API ID**: `offers_compare`
 * - **Description**: `OffersCompare`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OffersCompareSlice = prismicT.SharedSlice<
  "offers_compare",
  OffersCompareSliceVariation
>;
/**
 * Primary content in IllustratedContent → Primary
 *
 */
interface OverviewSliceDefaultPrimary {
  /**
   * title field in *IllustratedContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: overview.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * text field in *IllustratedContent → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: overview.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismicT.RichTextField;
  /**
   * illustration field in *IllustratedContent → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: overview.primary.illustration
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  illustration: prismicT.ImageField<never>;
}
/**
 * Default variation for IllustratedContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OverviewSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<OverviewSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *IllustratedContent*
 *
 */
type OverviewSliceVariation = OverviewSliceDefault;
/**
 * IllustratedContent Shared Slice
 *
 * - **API ID**: `overview`
 * - **Description**: `Overview`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OverviewSlice = prismicT.SharedSlice<
  "overview",
  OverviewSliceVariation
>;
/**
 * Primary content in Projects → Primary
 *
 */
interface ProjectsSliceDefaultPrimary {
  /**
   * title field in *Projects → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
}
/**
 * Item in Projects → Items
 *
 */
export interface ProjectsSliceDefaultItem {
  /**
   * project field in *Projects → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].project
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  project: prismicT.RelationField<"project">;
}
/**
 * Default variation for Projects Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProjectsSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<ProjectsSliceDefaultPrimary>,
  Simplify<ProjectsSliceDefaultItem>
>;
/**
 * Slice variation for *Projects*
 *
 */
type ProjectsSliceVariation = ProjectsSliceDefault;
/**
 * Projects Shared Slice
 *
 * - **API ID**: `projects`
 * - **Description**: `Projects`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProjectsSlice = prismicT.SharedSlice<
  "projects",
  ProjectsSliceVariation
>;
/**
 * Item in Strengths → Items
 *
 */
export interface StrengthsSliceDefaultItem {
  /**
   * icon field in *Strengths → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: strengths.items[].icon
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon: prismicT.ImageField<never>;
  /**
   * title field in *Strengths → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: strengths.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * description field in *Strengths → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: strengths.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  description: prismicT.KeyTextField;
}
/**
 * Default variation for Strengths Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type StrengthsSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<StrengthsSliceDefaultItem>
>;
/**
 * Slice variation for *Strengths*
 *
 */
type StrengthsSliceVariation = StrengthsSliceDefault;
/**
 * Strengths Shared Slice
 *
 * - **API ID**: `strengths`
 * - **Description**: `Strengths`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type StrengthsSlice = prismicT.SharedSlice<
  "strengths",
  StrengthsSliceVariation
>;
/**
 * Primary content in TeamCallout → Primary
 *
 */
interface TeamCalloutSliceDefaultPrimary {
  /**
   * illustration field in *TeamCallout → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: team_callout.primary.illustration
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  illustration: prismicT.ImageField<never>;
  /**
   * title field in *TeamCallout → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_callout.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * text field in *TeamCallout → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_callout.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismicT.RichTextField;
  /**
   * contact_text_button field in *TeamCallout → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Nous contacter
   * - **API ID Path**: team_callout.primary.contact_text_button
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  contact_text_button: prismicT.KeyTextField;
  /**
   * about_text_button field in *TeamCallout → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Qui sommes-nous ?
   * - **API ID Path**: team_callout.primary.about_text_button
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  about_text_button: prismicT.KeyTextField;
}
/**
 * Default variation for TeamCallout Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TeamCalloutSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<TeamCalloutSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *TeamCallout*
 *
 */
type TeamCalloutSliceVariation = TeamCalloutSliceDefault;
/**
 * TeamCallout Shared Slice
 *
 * - **API ID**: `team_callout`
 * - **Description**: `TeamCallout`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TeamCalloutSlice = prismicT.SharedSlice<
  "team_callout",
  TeamCalloutSliceVariation
>;
/**
 * Primary content in Testimonies → Primary
 *
 */
interface TestimoniesSliceDefaultPrimary {
  /**
   * title field in *Testimonies → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonies.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * introduction field in *Testimonies → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonies.primary.introduction
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  introduction: prismicT.RichTextField;
}
/**
 * Item in Testimonies → Items
 *
 */
export interface TestimoniesSliceDefaultItem {
  /**
   * image field in *Testimonies → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonies.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * name field in *Testimonies → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonies.items[].name
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismicT.KeyTextField;
  /**
   * info field in *Testimonies → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonies.items[].info
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  info: prismicT.KeyTextField;
  /**
   * date field in *Testimonies → Items*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonies.items[].date
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  date: prismicT.DateField;
  /**
   * testimony field in *Testimonies → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonies.items[].testimony
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  testimony: prismicT.RichTextField;
}
/**
 * Default variation for Testimonies Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimoniesSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<TestimoniesSliceDefaultPrimary>,
  Simplify<TestimoniesSliceDefaultItem>
>;
/**
 * Slice variation for *Testimonies*
 *
 */
type TestimoniesSliceVariation = TestimoniesSliceDefault;
/**
 * Testimonies Shared Slice
 *
 * - **API ID**: `testimonies`
 * - **Description**: `Testimonies`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimoniesSlice = prismicT.SharedSlice<
  "testimonies",
  TestimoniesSliceVariation
>;
/**
 * Primary content in ValueProposition → Primary
 *
 */
interface ValuePropositionSliceDefaultPrimary {
  /**
   * illustration field in *ValueProposition → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: value_proposition.primary.illustration
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  illustration: prismicT.ImageField<never>;
  /**
   * text field in *ValueProposition → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: value_proposition.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismicT.RichTextField;
}
/**
 * Item in ValueProposition → Items
 *
 */
export interface ValuePropositionSliceDefaultItem {
  /**
   * illustration field in *ValueProposition → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: value_proposition.items[].illustration
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  illustration: prismicT.ImageField<never>;
  /**
   * title field in *ValueProposition → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: value_proposition.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * text field in *ValueProposition → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: value_proposition.items[].text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismicT.RichTextField;
}
/**
 * Default variation for ValueProposition Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ValuePropositionSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<ValuePropositionSliceDefaultPrimary>,
  Simplify<ValuePropositionSliceDefaultItem>
>;
/**
 * Slice variation for *ValueProposition*
 *
 */
type ValuePropositionSliceVariation = ValuePropositionSliceDefault;
/**
 * ValueProposition Shared Slice
 *
 * - **API ID**: `value_proposition`
 * - **Description**: `ValueProposition`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ValuePropositionSlice = prismicT.SharedSlice<
  "value_proposition",
  ValuePropositionSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      AboutDocument,
      AccueilDocumentData,
      AccueilDocumentDataSlicesSlice,
      AccueilDocument,
      GestionDocumentData,
      GestionDocumentDataSlicesSlice,
      GestionDocument,
      LocationDocumentData,
      LocationDocumentDataSlicesSlice,
      LocationDocument,
      NewsDocumentData,
      NewsDocument,
      ProjectDocumentData,
      ProjectDocumentDataSlicesSlice,
      ProjectDocument,
      VenteDocumentData,
      VenteDocumentDataSlicesSlice,
      VenteDocument,
      AllDocumentTypes,
      ContactBlockSliceDefaultPrimary,
      ContactBlockSliceDefault,
      ContactBlockSliceVariation,
      ContactBlockSlice,
      EstimateFormSliceDefaultPrimary,
      EstimateFormSliceDefault,
      EstimateFormSliceVariation,
      EstimateFormSlice,
      LatestNewsSliceDefaultPrimary,
      LatestNewsSliceDefault,
      LatestNewsSliceVariation,
      LatestNewsSlice,
      OffersSliceDefaultPrimary,
      OffersSliceDefaultItem,
      OffersSliceDefault,
      OffersSliceVariation,
      OffersSlice,
      OffersCompareSliceDefaultPrimary,
      OffersCompareSliceDefaultItem,
      OffersCompareSliceDefault,
      OffersCompareSliceVariation,
      OffersCompareSlice,
      OverviewSliceDefaultPrimary,
      OverviewSliceDefault,
      OverviewSliceVariation,
      OverviewSlice,
      ProjectsSliceDefaultPrimary,
      ProjectsSliceDefaultItem,
      ProjectsSliceDefault,
      ProjectsSliceVariation,
      ProjectsSlice,
      StrengthsSliceDefaultItem,
      StrengthsSliceDefault,
      StrengthsSliceVariation,
      StrengthsSlice,
      TeamCalloutSliceDefaultPrimary,
      TeamCalloutSliceDefault,
      TeamCalloutSliceVariation,
      TeamCalloutSlice,
      TestimoniesSliceDefaultPrimary,
      TestimoniesSliceDefaultItem,
      TestimoniesSliceDefault,
      TestimoniesSliceVariation,
      TestimoniesSlice,
      ValuePropositionSliceDefaultPrimary,
      ValuePropositionSliceDefaultItem,
      ValuePropositionSliceDefault,
      ValuePropositionSliceVariation,
      ValuePropositionSlice,
    };
  }
}
