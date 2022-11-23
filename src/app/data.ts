import {ClusterNode} from '@swimlane/ngx-graph';
import {Category, Relation} from "./app.component";

export const categories: Category[] = [
    {
        id: 'scheme-1',
        name: 'Product Sales',
        type: 'scheme'
    },
    {
        id: 'category-1',
        name: 'Betalningar',
        type: 'category',
        productId: '0115',
    },
    {
        id: 'category-2',
        name: 'Category-2',
        type: 'category',
        productId: 'P1',
    },
    {
        id: 'category-3',
        name: 'Category-3',
        type: 'category',
        productId: 'P3',
    },
    {
        id: 'scheme-2',
        name: 'Betalningar',
        type: 'scheme',
    },
    {
        id: 'scheme-3',
        name: 'scheme-3',
        type: 'scheme',
    },
    {
        id: 'scheme-4',
        name: 'scheme-3',
        type: 'scheme',
    },
    {
        id: 'category-4',
        name: 'Svenska Betalningar',
        type: 'category',
        productId: '0300',
    },
    {
        id: 'category-5',
        name: 'category-5',
        type: 'category',
        productId: 'P5',
    },
    {
        id: 'category-6',
        name: 'category-6',
        type: 'category',
        productId: 'P6',
    },
    {
        id: 'category-7',
        name: 'category-7',
        type: 'category',
        productId: 'P7',
    },
    {
        id: 'category-8',
        name: 'category-8',
        type: 'category',
        productId: 'P8',
    },
    {
        id: 'scheme-5',
        name: 'Svenska Betalningar',
        type: 'scheme',
    },
    {
        id: 'category-9',
        name: 'Tillval BGC',
        type: 'category',
        productId: '0301',
    },
    {
        id: 'category-10',
        name: 'category-10',
        type: 'category',
        productId: 'P10',
    },

];

export const relations: Relation[] = [
    {
        id: 'relation-1',
        source: 'scheme-1',
        target: 'category-1',
        level: '1'
    },
    {
        id: 'relation-2',
        source: 'scheme-1',
        target: 'category-2',
        level: '1'
    },
    {
        id: 'relation-3',
        source: 'scheme-1',
        target: 'category-3',
        level: '1'
    },
    {
        id: 'relation-4',
        source: 'category-1',
        target: 'scheme-2',
    },
    {
        id: 'relation-5',
        source: 'category-2',
        target: 'scheme-3',
    },
    {
        id: 'relation-6',
        source: 'category-3',
        target: 'scheme-4',
    },
    {
        id: 'relation-7',
        source: 'scheme-2',
        target: 'category-4',
        level: '2'
    },
    {
        id: 'relation-8',
        source: 'scheme-2',
        target: 'category-5',
        level: '2'
    },
    {
        id: 'relation-9',
        source: 'scheme-3',
        target: 'category-5',
        level: '2'
    },
    {
        id: 'relation-10',
        source: 'scheme-3',
        target: 'category-6',
        level: '2'
    },
    {
        id: 'relation-11',
        source: 'scheme-3',
        target: 'category-7',
        level: '2'
    },
    {
        id: 'relation-12',
        source: 'scheme-4',
        target: 'category-8',
        level: '2'
    },
    {
        id: 'relation-13',
        source: 'category-4',
        target: 'scheme-5',
    },
    {
        id: 'relation-15',
        source: 'scheme-5',
        target: 'category-9',
        level: '3'
    },
    {
        id: 'relation-16',
        source: 'scheme-5',
        target: 'category-10',
        level: '3'
    },

];

export const clusters: ClusterNode[] = [
    {
        id: 'level-1',
        label: 'Level 1',
        childNodeIds: ['category-1', 'category-2', 'category-3'],
    },
    {
        id: 'level-2',
        label: 'Level 2',
        childNodeIds: [
            'category-4',
            'category-5',
            'category-6',
            'category-7',
            'category-8',
        ],
    },
    {
        id: 'level-3',
        label: 'Level 3',
        childNodeIds: ['category-9', 'category-10'],
    },
];
