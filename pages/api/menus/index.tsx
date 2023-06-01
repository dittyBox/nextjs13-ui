import type { NextApiRequest, NextApiResponse } from 'next';
import data from './data.json';

export type Menu = {
	parentId: string;
	menuId: string;
	name: string;
	description: string;
	depth: number;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Menu[]>
) {
	res.status(200).json(data);
}