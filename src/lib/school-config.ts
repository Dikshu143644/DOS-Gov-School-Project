import schoolConfig from "../../config/school.json";
import featuresConfig from "../../config/platform-features.json";

export type SchoolConfig = typeof schoolConfig;
export type PlatformFeatures = typeof featuresConfig;

export function getSchoolConfig(): SchoolConfig {
  return schoolConfig;
}

export function getPlatformFeatures(): PlatformFeatures {
  return featuresConfig;
}

export function getPrimaryPhone() {
  return (
    schoolConfig.contact.phones.find((p) => p.isPrimary) ??
    schoolConfig.contact.phones[0]
  );
}

export function getPrimaryEmail() {
  return (
    schoolConfig.contact.emails.find((e) => e.isPrimary) ??
    schoolConfig.contact.emails[0]
  );
}
