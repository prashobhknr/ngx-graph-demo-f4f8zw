import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'scheme-1',
    label: 'Product Sales',
    data:{
        type: 'scheme',
    } 
  }, 
  {
    id: 'category-1',
    label: 'Betalningar',
    data:{
       type:'category',
       product_id: '0115'
    }
  },
  {
    id: 'category-2',
    label: 'Category-2',
    data:{
       type:'category',
       product_id: 'P1'
    }
  },
  {
    id: 'category-3',
    label: 'Category-3',
    data:{
       type:'category',
       product_id: 'P3'
    }
  },
  {
    id: 'scheme-2',
    label: 'Betalningar',
    data:{
        type: 'scheme',
    } 
  }, 
  {
    id: 'scheme-3',
    label: 'scheme-3',
    data:{
        type: 'scheme',
    } 
  }, 
  {
    id: 'scheme-4',
    label: 'scheme-3',
    data:{
        type: 'scheme',
    } 
  }, 
  {
    id: 'category-4',
    label: 'Svenska Betalningar',
    data:{
       type:'category',
       product_id: '0300'
    }
  },
  {
    id: 'category-5',
    label: 'category-5',
    data:{
       type:'category',
       product_id: 'P5'
    }
  },
  {
    id: 'category-6',
    label: 'category-6',
    data:{
       type:'category',
       product_id: 'P6'
    }
  },
  {
    id: 'category-7',
    label: 'category-7',
    data:{
       type:'category',
       product_id: 'P7'
    }
  },
  {
    id: 'category-8',
    label: 'category-8',
    data:{
       type:'category',
       product_id: 'P8'
    }
  },
  {
    id: 'scheme-5',
    label: 'Svenska Betalningar',
    data:{
       type:'scheme'
    }
  },
  {
    id: 'category-9',
    label: 'Tillval BGC',
    data:{
       type:'category',
       product_id: '0301'
    }
  },
  {
    id: 'category-10',
    label: 'category-10',
    data:{
       type:'category',
       product_id: 'P10'
    }
  },
];

export const clusters: ClusterNode[] = [
  {
    id: 'level-1',
    label: 'Level 1',
    childNodeIds: ['category-1', 'category-2', 'category-3']
  },
  {
    id: 'level-2',
    label: 'Level 2',
    childNodeIds: ['category-4', 'category-5', 'category-6', 'category-7', 'category-8']
  },
  {
    id: 'level-3',
    label: 'Level 3',
    childNodeIds: ['category-9', 'category-10']
  }
]

export const links: Edge[] = [
  {
    id: 'relation-1',
    source: 'scheme-1',
    target: 'category-1',
    label: 'category of scheme'
  }, 
  {
    id: 'relation-2',
    source: 'scheme-1',
    target: 'category-2',
    label: 'category of scheme'
  },
  {
    id: 'relation-3',
    source: 'scheme-1',
    target: 'category-3',
    label: 'category of scheme'
  },
  {
    id: 'relation-4',
    source: 'category-1',
    target: 'scheme-2',
    label: 'subcategorisation'
  },
  {
    id: 'relation-5',
    source: 'category-2',
    target: 'scheme-3',
    label: 'subcategorisation'
  },
  {
    id: 'relation-6',
    source: 'category-3',
    target: 'scheme-4',
    label: 'subcategorisation'
  },
  {
    id: 'relation-7',
    source: 'scheme-2',
    target: 'category-4',
    label: 'category of scheme'
  },
  {
    id: 'relation-8',
    source: 'scheme-2',
    target: 'category-5',
    label: 'category of scheme'
  },
  {
    id: 'relation-9',
    source: 'scheme-3',
    target: 'category-5',
    label: 'category of scheme'
  },
  {
    id: 'relation-10',
    source: 'scheme-3',
    target: 'category-6',
    label: 'category of scheme'
  },
  {
    id: 'relation-11',
    source: 'scheme-3',
    target: 'category-7',
    label: 'category of scheme'
  },
  {
    id: 'relation-12',
    source: 'scheme-4',
    target: 'category-8',
    label: 'category of scheme'
  },
  {
    id: 'relation-13',
    source: 'category-4',
    target: 'scheme-5',
    label: 'subcategorisation'
  },
  {
    id: 'relation-15',
    source: 'scheme-5',
    target: 'category-9',
    label: 'category of scheme'
  },
  {
    id: 'relation-16',
    source: 'scheme-5',
    target: 'category-10',
    label: 'category of scheme'
  },
];