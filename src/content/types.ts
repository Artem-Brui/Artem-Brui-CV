import { PropsIcons } from "@components/SVGs/Icons";
import React from "react";

export type SkillItemContentType = {
  name: string;
  logo: React.FC<PropsIcons>;
  logoColor: string;
  descreption: string;
};

export type ProjectItemContentType = {
  name: string;
  link: string;
  previewImage: string;
  created: string;
  challenges: string[];
  skills: string[];
};

export type JobItemContentType = {
  company: string;
  location: string;
  jobType: string;
  role: string;
  challenges: string[];
  achievements: string[];
  startDate: string;
  endDate: string;
};

export type ContentType = {
  Header: {
    ownerName: string;
    languageFlag: React.FC<PropsIcons>;
  };
  HomeSection: {
    sectionName: string;
    greating: string[];
    descreption: string;
    callToAction: string;
    counter: {
      projectsAmount: number;
      projectsTitle: string;
      carrierStarted: string;
      carrierTitle: string;
      skillsAmount: number;
      skillsTitle: string;
    };
  };
  AboutSection: {
    sectionName: string;
    greating: string;
    paragraphsList: {
      paragraph: string;
    }[];
  };
  SkillsSection: {
    sectionName: string;
    sectionHeader: string;
    skillsList: SkillItemContentType[];
  };
  WorksSection: {
    sectionName: string;
    sectionHeader: string;
    works: ProjectItemContentType[];
    createdTitle: string;
    challengesTitle: string;
    buttonTitle: string;
  };
  ExperienceSection: {
    sectionName: string;
    sectionHeader: string;
    present: string;
    jobs: JobItemContentType[];
    titles: {
      challenges: string;
      achievements: string;
    };
  };
  ContactSection: {
    sectionName: string;
    sectionHeader: string;
    formHeader: string;
    form: {
      formLabels: {
        name: string;
        email: string;
        message: string;
        button: string;
      };
      formPlaceholders: {
        name: string;
        email: string;
        message: string;
      };
    };
  };
  Footer: {
    textRights: string;
  };
};
