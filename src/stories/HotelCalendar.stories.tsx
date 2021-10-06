import { fr, enUS } from 'date-fns/locale';
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from '../stories/styled';

import HotelCalendar from './HotelCalendar';
import { enTranslations, frTranslations } from '../translations';

export default {
    title: 'Example/HotelCalendar',
    component: HotelCalendar,
    argTypes: {
        locale: {
            options: ['fr', 'en'],
            mapping: {
                fr,
                en: enUS,
            }
        },
        format: {
            type: { name: 'string', required: false },
            defaultValue: 'PP',
        },
        startDate: {
            type: { name: 'date', required: false },
            defaultValue: new Date(),
        },
        endDate: {
            type: { name: 'date', required: false },
            defaultValue: false,
            table: {
                type: {
                    summary: 'Maximum date of calendar',
                    defaultValue: {
                        type: 'boolean',
                        summary: 'false',
                    }
                }
            },
            control: {
                type: 'date',
            }
        },
        disabledDates: {
            type: { name: 'array', required: false },
            defaultValue: [],
        },
        noCheckInDates: {
            type: { name: 'array', required: false },
            defaultValue: [(new Date()).setDate((new Date()).getDate() + 8)],
        },
        noCheckOutDates: {
            type: { name: 'array', required: false },
            defaultValue: [(new Date()).setDate((new Date()).getDate() + 16)],
        },
        disabledDaysOfWeek: {
            type: { name: 'array', required: false },
            defaultValue: [],
        },
        hoveringTooltip: {
            type: { name: 'code', required: false },
            defaultValue: true,
        },
        moveBothMonths: {
            type: { name: 'boolean', required: false },
            defaultValue: true,
        },
        i18n: {
            options: ['fr', 'en'],
            mapping: {
                fr: frTranslations,
                en: enTranslations,
            },
            defaultValue: 'fr',
        },
        onDayClick: {
            type: { name: 'code', required: false },
            defaultValue: false,
        },
        theme: {
            type: { name: 'object', required: false },
            defaultValue: theme,
        },
        disabledDatesBetweenChecks: {
            type: { name: 'boolean', required: false },
            defaultValue: true,
        },
    },
} as ComponentMeta<typeof HotelCalendar>;

const Template: ComponentStory<typeof HotelCalendar> = (args) => <HotelCalendar {...args} />;

export const Default = Template.bind({});
Default.args = {};
