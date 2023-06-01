import type { NextApiRequest, NextApiResponse } from 'next';
import data from './data.json';

export type Menus = {
	parentId: string;
	menuId: string;
	name: string;
	description: string;
	depth: number;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Menus[]>
) {
	res.status(200).json(data);
}