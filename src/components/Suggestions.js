import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from 'firebase/firestore';
import { database } from '../firebaseConfig';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  TableSortLabel,
} from '@mui/material';

export default function Suggestions() {
  // ... (your existing code)

  return (
    <div className="suggestions">
      {/* ... (your existing code) */}
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            {/* ... (your existing code) */}
          </TableHead>
          <TableBody>
            {sortedSuggestions.map((suggestion) => (
              <TableRow
                key={suggestion.id}
                style={{
                  textDecoration:
                    suggestion.status === 'Complete' ? 'line-through' : 'none',
                }}
              >
                <TableCell>{suggestion.name}</TableCell>
                <TableCell>{suggestion.topic}</TableCell>
                <TableCell>{suggestion.suggestion}</TableCell>
                <TableCell>
                  {suggestion.date
                    ? suggestion.date.toDate().toLocaleString()
                    : 'N/A'}
                </TableCell>
                <TableCell>{suggestion.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
